import { v4 as uuidv4 } from "uuid";

/**
 * Exists to use UUIDs as ID instead of Ints
 */
export class UUIDManager {
  constructor() {
    this.ids = new Set();
  }

  // Returns a new unused unique identifier.
  fetch() {
    let uuid = uuidv4();
    while (this.ids.has(uuid)) {
      uuid = uuidv4();
    }

    this.ids.add(uuid);

    return uuid;
  }

  // Registers an identifier as used. Must throw if identifier is already used.
  set(id) {
    if (this.ids.has(id)) {
      throw new Error(`ID ${id} has already been used.`);
    }

    this.ids.add(id);
  }

  // Resets all used identifiers to unused.
  reset() {
    this.ids.clear();
  }
}
