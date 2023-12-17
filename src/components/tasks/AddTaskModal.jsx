import { useDispatch } from "react-redux";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    // console.log(data);
    dispatch(addTask(data));
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-3">
          <label htmlFor="tittle">Tittle</label>
          <input
            className="w-full"
            type="text"
            id="tittle"
            {...register("tittle", { required: true })}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="tittle">Description</label>
          <textarea
            className="w-full"
            type="text"
            id="description"
            {...register("description", { required: true })}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="tittle">Deadline</label>
          <input
            className="w-full"
            type="date"
            id="date"
            {...register("date", { required: true })}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="tittle">Assign To</label>
          <select
            className="w-full"
            type="date"
            id="assignedto"
            {...register("assignedto", { required: true })}
          >
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="Mezba Abedin">Mezba Abedin</option>
            <option value="Nahid Hasan">Nahid Hasan</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="tittle">Priority</label>
          <select
            className="w-full"
            type="date"
            id="priority"
            {...register("priority", { required: true })}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <input className="btn btn-primary" type="submit" />
      </form>
    </Modal>
  );
};

export default AddTaskModal;
