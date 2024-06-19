import React, { useEffect, useState } from "react";
import EditIcon from "../../public/assets/icons/edit";
import ArrowIcon from "../../public/assets/icons/arrow";
import { colors } from "../helpers/colors";

interface TaskData {
  type: string,
  text: string,
  date: string,
  status: string,
}

export default function Task({ data }: { data: TaskData }) {
  const [color, setColor] = useState<string>(colors.purple);

  useEffect(() => {
    setColor(getTaskColor());
  }, [data.type])

  const getTaskColor = (): string => {
    switch(data.type) {
      case "todo": return colors.purple;
      case "quick": return colors.purple;
      case "daily": return colors.blue;
      case "fitness": return colors.green;
      case "work": return colors.red;
      default: return colors.purple;
    }
  }

  return (
    <div className="task">
      <div className="task-content">
        <div className="task-content-top">
          <p className="task-content-top-type">{data.type}</p>
          <EditIcon width={18} height={18} color={colors.lightGray} />
        </div>
        <p className="task-content-text">{data.text}</p>
        <p className="task-content-date">{data.date}</p>
      </div>

      <div className="task-status" style={{ backgroundColor: color }}>
        <div className="task-status-arrow">
          <ArrowIcon width={12} height={12} color={colors.black} />
        </div>
      </div>
    </div>
  );
}
