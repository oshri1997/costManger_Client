class idb {
  constructor() {
    this.db = null;
  }

  // Open or create an IndexedDB database
  static async openCostsDB(name, version) {
    if (!window.indexedDB) {
      console.log("The browser doesn't support IndexedDB");
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(name, version);
      request.onupgradeneeded = (event) => {
        // Create the database if it doesn't exist
        const db = event.target.result;
        if (!db.objectStoreNames.contains("costs")) {
          db.createObjectStore("costs", { keyPath: "id", autoIncrement: true });
        }
      };

      request.onsuccess = (event) => {
        const db = new idb();
        db.db = event.target.result;
        console.log("Database initialized successfully.");
        resolve(db);
      };

      request.onerror = (event) => {
        console.error("IndexedDB error:", event.target.errorCode);
        reject(new Error("IndexedDB error: " + event.target.error.message));
      };
    });
  }

  async addCost(entry) {
    if (!this.db) {
      console.error("Database has not been initialized.");
      return;
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["costs"], "readwrite");
      transaction.onerror = (event) => {
        console.error("Transaction error:", event.target.error);
      };

      const store = transaction.objectStore("costs");
      const request = store.add(entry);

      request.onsuccess = () => {
        console.log("Entry added successfully.");
        resolve(true);
      };
      request.onerror = (event) => {
        console.error("Error adding entry to IndexedDB:", event.target.error);
        reject(new Error("Error adding entry to IndexedDB: " + event.target.error.message));
      };
    });
  }
  async getAllCosts() {
    if (!this.db) {
      console.error("Database has not been initialized.");
      return;
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["costs"], "readonly");
      const store = transaction.objectStore("costs");
      const request = store.getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        console.error("Error fetching entries from IndexedDB:", event.target.error);
        reject(
          new Error("Error fetching entries from IndexedDB: " + event.target.error.message)
        );
      };
    });
  }
}

// Expose idb to other scripts
window.idb = idb;
