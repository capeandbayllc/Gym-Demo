<template>
  <div class="h-full w-full border-2 border-primary-content rounded-xl">
    <table id="cost-table" class="h-full w-full">
      <thead>
        <tr>
          <td></td>
          <td>5 Sessions</td>
          <td>10 Sessions</td>
          <td>20 Sessions</td>
          <td>30 Sessions</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>Single</div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.single.five"
                type="checkbox"
                id="single_five"
              />
              <label for="single_five">$120 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.single.ten"
                type="checkbox"
                id="single_ten"
              />
              <label for="single_ten">$205 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.single.twenty"
                type="checkbox"
                id="single_twenty"
              />
              <label for="single_twenty">$395 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.single.thirty"
                type="checkbox"
                id="single_thirty"
              />
              <label for="single_thirty">$550 + Tax</label>
            </div>
          </td>
        </tr>

        <tr>
          <td><div>Group (2)</div></td>
          <td>
            <div>
              <input
                v-model="selected.group_two.five"
                type="checkbox"
                id="two_five"
              />
              <label for="two_five">$70 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.group_two.ten"
                type="checkbox"
                id="two_ten"
              />
              <label for="two_ten">$115 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.group_two.twenty"
                type="checkbox"
                id="two_twenty"
              />
              <label for="two_twenty">$195 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.group_two.thirty"
                type="checkbox"
                id="two_thirty"
              />
              <label for="two_thirty">$280 + Tax</label>
            </div>
          </td>
        </tr>

        <tr>
          <td><div>Group (3-4)</div></td>
          <td>
            <div>
              <input
                v-model="selected.group_three_four.five"
                type="checkbox"
                id="three_thirty"
              />
              <label for="three_thirty">$55 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.group_three_four.ten"
                type="checkbox"
                id="three_thirty"
              />
              <label for="three_thirty">$90 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.group_three_four.twenty"
                type="checkbox"
                id="three_thirty"
              />
              <label for="three_thirty">$140 + Tax</label>
            </div>
          </td>
          <td>
            <div>
              <input
                v-model="selected.group_three_four.thirty"
                type="checkbox"
                id="three_thirty"
              />
              <label for="three_thirty">$190 + Tax</label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="postcss">
table#cost-table {
  tr td {
    @apply border-primary-content;
  }
}
tr td {
  @apply border-2 border-collapse border-primary-content text-center;
}

thead tr td {
  @apply border-t-0;
}

td div {
  @apply flex justify-center items-center gap-1;
}

tr td:first-of-type {
  @apply border-l-0;
}

tr td:last-of-type {
  @apply border-r-0;
}

tr:last-of-type td {
  @apply border-b-0;
}

input[type="checkbox"] {
  @apply rounded-md bg-primary-content appearance-none m-0 h-5 w-5 border border-primary-content/50 outline-none;
  @apply focus:border;
}

input[type="checkbox"]:checked {
  @apply bg-secondary border-primary;
}

label {
  @apply capitalize text-sm;
}
</style>

<script setup lang="ts">
import { type ISelectionState, sessionSelectionDefault } from "./helpers";

interface Props {
  selected: ISelectionState;
}

const props = withDefaults(defineProps<Props>(), {
  selected: () => sessionSelectionDefault,
});

const selected: Ref<ISelectionState> = ref(props.selected);
</script>
