
import { toast } from 'react-toastify';
import "../Style/Animation.css"
export const success = (title) => {
  toast.success(title, {
    position: toast.POSITION.BOTTOM_CENTER,
    theme: 'colored',
  });
};

export const error = (title) => {
  toast.error(title, {
    position: toast.POSITION.BOTTOM_CENTER,
    theme: 'colored',
  });
};
