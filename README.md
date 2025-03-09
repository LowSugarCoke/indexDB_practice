### **IndexedDB Practice**

---

## **Goal**
Implement a to-do list application using IndexedDB with the following features:
✅ Add new tasks  
✅ Search and sort tasks  
✅ Edit tasks  
✅ Delete tasks  
✅ Data persistence (Stored in IndexedDB, remains after refresh)  

---

## **Data Structure (Schema)**
**Database Name:** `TodoApp`  
**Table Name:** `tasks`  

**Schema Definition:**  
| Field Name       | Type           | Description                 |
|:-----------------|:---------------|:----------------------------|
| `id`              | `number`       | Auto-increment primary key  |
| `title`           | `string`       | Task title                   |
| `description`     | `string`       | Detailed description         |
| `status`          | `boolean`      | Completion status (true/false) |
| `dueDate`         | `string`       | Due date (ISO 8601 format)   |

---

## **Feature Plan**
### 1. **Add New Task**
- Users can input a title, description, due date, and choose whether the task is complete.
- Data will be stored in IndexedDB.

### 2. **Search Tasks**
- Search tasks by title keyword.
- Sort tasks based on `dueDate` (default sorting by due date).
- Filter options available (e.g., show only completed or incomplete tasks).

### 3. **Edit Task**
- Users can edit the task's title, description, status, and due date.
- The data will be updated immediately in IndexedDB.

### 4. **Delete Task**
- Support for deleting individual tasks.
- Support for batch deletion (select multiple tasks for deletion).

### 5. **UI/UX Notifications**
- Display messages for each action, such as:
  - "Added successfully"
  - "Deleted successfully"
  - "Updated successfully"
- Provide a clean and intuitive UI.

---

## **IndexedDB Operation Plan**
### **Database Initialization**
- Create a database called `TodoApp`.
- Create a `tasks` table with `id` set as the auto-increment primary key.
- Create an index on `title` (for search).
- Create an index on `dueDate` (for sorting).

### **CRUD Functions**
1. **Add (Add)**
   - Use `.add()` to insert data into IndexedDB.
2. **Read (Read)**
   - Use `.getAll()` to retrieve all data.
   - Use `.index()` with `.getAll()` to enable search and sorting.
3. **Update (Update)**
   - Use `.put()` to update data.
4. **Delete (Delete)**
   - Use `.delete()` to delete data by ID.

---

## **API Design**
### 1. `addTask(task: Task): Promise<void>`
- Adds a new task.

### 2. `getTasks(filter: FilterOptions): Promise<Task[]>`
- Retrieves and returns tasks based on filter conditions.

### 3. `updateTask(task: Task): Promise<void>`
- Updates a specific task.

### 4. `deleteTask(id: number): Promise<void>`
- Deletes a specific task.

---

## **UI Mockup Suggestions**
- ✅ Search bar (supports keyword search)  
- ✅ Add button (to add new tasks)  
- ✅ Task list (shows title, description, status, and due date)  
- ✅ Edit button  
- ✅ Delete button (single/bulk delete)  
- ✅ Filter dropdown (Completed / Incomplete / All)  

---

## **Implementation Steps**
1. Initialize IndexedDB
2. Implement CRUD operations
3. Build UI and implement event handling
4. Test and optimize user experience



Would you like a sample code structure or guidance on a specific feature? 😊