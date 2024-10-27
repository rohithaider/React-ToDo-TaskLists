import { useContext } from "react";
import { FormContext } from "./context";
import { useState, useEffect } from "react";
import { toast } from "react-toastify"; // Import React Toastify

export default function PopupForm() {
  const { setIsShow, task, setTask, currentTask, setCurrentTask } = useContext(FormContext);
  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    dueDate: "",
    category: "",
  });

  useEffect(() => {
    if (currentTask) {
      setFormData({
        taskName: currentTask.taskName,
        description: currentTask.description,
        dueDate: currentTask.dueDate,
        category: currentTask.category,
      });
    } else {
      setFormData({
        taskName: "",
        description: "",
        dueDate: "",
        category: "",
      });
    }
  }, [currentTask]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();

    // Validation: Check if any field is empty
    if (!formData.taskName || !formData.description || !formData.dueDate || !formData.category) {
      toast.warn("Please fill in all fields: Title, Description, Due Date, and Category."); // Show warning
      return; // Prevent form submission
    }

    if (currentTask) {
      
      const updatedTasks = task.map((t) =>
        t.id === currentTask.id ? { ...t, ...formData } : t
      );
      setTask(updatedTasks);
    } else {
      
      const newTask = {
        ...formData,
        id: crypto.randomUUID(),
      };
      setTask([...task, newTask]);
    }

    
    setFormData({
      taskName: "",
      description: "",
      dueDate: "",
      category: "",
    });
    setCurrentTask(null); 
    setIsShow(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            Create Task
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                name="taskName"
                value={formData.taskName}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a category</option>
                <option value="todo">To-Do</option>
                <option value="inprogress">On Progress</option>
                <option value="done">Done</option>
                <option value="revised">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsShow(false)}
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleClick}
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
