#!/bin/bash

# import-db.sh --path="string" --use=string -build[bool]
#   --path: The absolute/relative path to your gynrevnue project (default: "./../gr-prototype")
#   --use: what is used to run artisan command, example php, sail or even some vendor executable (default: php)
#   --build: If migration and seeder should be ran (default is false)
# . import-db.sh --path="./../gr-prototype" --use=sail -build

canBuild=0
path="./../gr-prototype"
use="php"
includeImage=""
for var in "$@"
do
    args=(${var//=/ })
    if [ "${args[0]}" = "-b" ]; then
         canBuild=1
    elif [ "${args[0]}" = "-i" ]; then
        includeImage="--update-profile-image=true"
    elif [ "${args[0]}" = "--path" ]; then
        path=${args[1]}
    elif [ "${args[0]}" = "--use" ]; then
        use=${args[1]}
    fi
done

currentDir=$PWD
storagePath="$path/storage/app"

run_migration () {
    cd $path
    if [ "$canBuild" = "1" ]; then
        eval "$use artisan migrate:fresh --seed"
    fi

    echo "Building schema"
    eval "$use artisan export:mirage-schema"
    echo "Hydrating data"
    eval "$use artisan export:mirage-data $includeImage"
    cd $currentDir
}

copy_schema_data () {
    echo "Importing schema with data"
    mv "$storagePath/data.json" ./api/data
    mv "$storagePath/lighthouse-schema.graphql" ./api/schema.gql
    if [ "$includeImage" != "" ]; then
        mkdir -p ./public/images/profile
        mv "$storagePath/profile-images"/* ./public/images/profile
    fi
}

run_migration
copy_schema_data

echo "done"
