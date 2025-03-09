const DB_NAME = 'TodoApp';
const DB_VERSION = 1;
const STORE_NAME = 'tasks';

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const objectStore = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
                objectStore.createIndex('title', 'title', { unique: false });
                objectStore.createIndex('dueDate', 'dueDate', { unique: false });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(`Error initializing database: ${event.target.error}`);
    });
}

async function addTask(task) {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.add(task);

    tx.oncomplete = () => console.log('Task added successfully!');
    tx.onerror = (event) => console.error(`Error adding task: ${event.target.error}`);
}

async function getTasks() {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();

    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(`Error fetching tasks: ${request.error}`);
    });
}

async function updateTask(task) {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(task);

    tx.oncomplete = () => console.log('Task updated successfully!');
    tx.onerror = (event) => console.error(`Error updating task: ${event.target.error}`);
}

async function deleteTask(id) {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(id);

    tx.oncomplete = () => console.log('Task deleted successfully!');
    tx.onerror = (event) => console.error(`Error deleting task: ${event.target.error}`);
}
