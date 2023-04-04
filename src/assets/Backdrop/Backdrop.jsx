import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CardModal from "../Card/Card";
import { AuthContext } from "../../components/context/AuthContext";

export default function BackdropModal({ title, desc }) {
  const { closeAlert } = React.useContext(AuthContext);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        onClick={closeAlert}
      >
        <CardModal close={closeAlert} title={title} desc={desc} />
      </Backdrop>
    </div>
  );
}
