import React from "react";
import Task from "./task";
import TextInput from "./textInput";
import PlusIcon from "../../public/assets/icons/plus";
import DropdownInput from "./dropdownInput";
import Button from "./button";

export default function Tasks({ color, defaultType }: { color: string, defaultType: string }) {
  return (
    <div className="tasks">
      <div className="tasks-new">
        <TextInput
          label="QUICK ADD"
          borderColor="--light-gray"
          borderRadius={12}
          attachSubmit
          onSubmit={() => console.log('Submit button clicked; Type: ' + defaultType)}
        />
        <div className="tasks-new-actions">
          <Button color={color} icon={<PlusIcon width={12} height={12} color={color} />} label="ADD TASK" />
          <DropdownInput
            options={["Priority", "Due Date", "Task Type"]}
            label="Sort"
            borderRadius={16}
            borderColor="--black"
          />
        </div>
      </div>
      <Task data={{ type: "work", text: "Do something that might take a hot minute, then do something else that might take even longer, like eating string cheese", date: "", status: "status" }}/>
      <Task data={{ type: "todo", text: "Do this every day", date: "THURSDAY - OCT 16", status: "status" }}/>
      <Task data={{ type: "daily", text: "Do something quick", date: "TOMORROW", status: "status" }}/>
    </div>
  );
}
