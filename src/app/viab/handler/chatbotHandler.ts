import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_AI_BASE_URL;

export const interviewHandler = async (values: any) => {
  try {
    const resp = await axios.post("https://nnnlnhxhyr4zd74guusgqb6wrm.srv.us/api/v1/boq/workflow", values);
    console.log("Response:", resp);

    const workflow = resp?.data?.workflow_responses?.[0];

    if (workflow?.interview_data?.content) {
      console.log("Matched: interview_data");
      return {
        message: workflow.interview_data.content,
        status: resp.status,
      };
    } else if (workflow?.analysis_data) {
      console.log("Matched: analysis_data");
      return {
        message: workflow.analysis_data,
        status: resp.status,
      }
    }
      else if (workflow?.boq_data) {
      console.log("Matched: analysis_data");
      return {
        message: workflow.boq_data,
        status: resp.status,
      }}
     else {
      console.log("No relevant data found in response.");
      return {
        message: "No valid content found.",
        status: resp.status,
      };
    }
  } catch (error: any) {
    console.error("Error occurred in interviewHandler:", error?.message || error);
    return {
      message: "Something went wrong.",
      status: 500,
    };
  }
};
