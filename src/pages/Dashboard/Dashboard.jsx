import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

export default function Dashboard() {
  const msg = useContext(UserContext);
  return <div>Dashboard</div>;
}
