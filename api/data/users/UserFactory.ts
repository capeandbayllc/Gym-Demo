import { Server } from "miragejs/server";

export const KIOSK_EMAIL: string = "kiosk@gymrevenue.com";
export const UserFactory = () => {}; // Temp Fix
export default function createAdminAndKioskUser(server: Server): void {
  server.db.createCollection("users", [
    {
      id: "00a40b8b-f045-4208-ae08-fa2e78f586as",
      clientId: "cedb1892-9bc2-4e40-9dca-831741944e48",
      first_name: "Kevin",
      middle_name: null,
      last_name: "Buchanan",
      email_verified_at: null,
      email: "admin@gymrevenue.com",
      alternate_emails: null,
      phone: "5517165975",
      alternate_phone: null,
      date_of_birth: null,
      gender: "male",
      drivers_license_number: null,
      profile_photo_path: "/account-lg.png",
      occupation: null,
      employer: null,
      barcode: null,
      address1: "76506 Noemie Land Apt. 380",
      address2: "Suite 789",
      city: "South Dinaland",
      state: "AL",
      zip: "71430",
      unsubscribed_email: 0,
      unsubscribed_sms: 0,
      password: "$2y$10$1nXDG/gVvnNZYRmPKkBSDujC2pq5GU1diAIEmmP6XGqLCjDwhCnYG",
      two_factor_secret: null,
      two_factor_recovery_codes: null,
      access_token: null,
      remember_token: null,
      user_type: "lead",
      entry_source: null,
      // TODO: need to pull a valid location id from data.json
      // homeLocationId: "0869e475-7256-45b6-8e97-9e0bf5c83c2f",
      manager: null,
      opportunity: null,
      externalId: null,
      misc: null,
      details:
        '{"emergency_contact": {"ec_phone": "", "ec_last_name": "", "ec_first_name": ""}, "contact_preference": "sms", "membership_type_id": ""}',
      is_previous: 0,
      created_at: "2023-03-03 22:29:24",
      updated_at: "2023-03-03 22:29:24",
      started_at: null,
      ended_at: null,
      terminated_at: null,
      obfuscated_at: null,
      is_cape_and_bay_user: 0,
    },
    {
      id: "00a40b8b-f045-4208-ae08-fa2e78f123b6",
      clientId: "cedb1892-9bc2-4e40-9dca-831741944e48",
      first_name: "Kiosk",
      middle_name: null,
      last_name: "User",
      email_verified_at: null,
      email: KIOSK_EMAIL,
      alternate_emails: null,
      phone: "5517165975",
      alternate_phone: null,
      date_of_birth: null,
      gender: "male",
      drivers_license_number: null,
      profile_photo_path: "account-lg.png",
      occupation: null,
      employer: null,
      barcode: null,
      address1: "76506 Noemie Land Apt. 380",
      address2: "Suite 789",
      city: "South Dinaland",
      state: "AL",
      zip: "71430",
      unsubscribed_email: 0,
      unsubscribed_sms: 0,
      password: "$2y$10$1nXDG/gVvnNZYRmPKkBSDujC2pq5GU1diAIEmmP6XGqLCjDwhCnYG",
      two_factor_secret: null,
      two_factor_recovery_codes: null,
      access_token: null,
      remember_token: null,
      user_type: "lead",
      entry_source: null,
      // TODO: need to pull a valid location id from data.json
      // homeLocationId: "0869e475-7256-45b6-8e97-9e0bf5c83c2f",
      manager: null,
      opportunity: null,
      externalId: null,
      misc: null,
      details:
        '{"emergency_contact": {"ec_phone": "", "ec_last_name": "", "ec_first_name": ""}, "contact_preference": "sms", "membership_type_id": ""}',
      is_previous: 0,
      created_at: "2023-03-03 22:29:24",
      updated_at: "2023-03-03 22:29:24",
      started_at: null,
      ended_at: null,
      terminated_at: null,
      obfuscated_at: null,
      is_cape_and_bay_user: 0,
    },
  ]);
}
