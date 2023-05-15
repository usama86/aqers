import { useRouter } from "next/router";
import AgentProfileComponent from "components/UseCase/AgentProfile";
import React from "react";

const AgentProfile = () => {
  const router = useRouter();
  // Get the query parameter from the URL
  const { agent_id } = router.query;
  return <AgentProfileComponent agent_id={agent_id} />;
};

export default AgentProfile;
