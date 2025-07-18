import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_AI_BASE_URL;
export const interviewHandler = async (values: any) => {
  try {
    const resp = await axios.post(`${baseURL}/api/interview`, values);
      
    return { message: resp?.data?.content, status: resp.status };
  } catch (error) {
    console.log(`error: ${JSON.stringify(error)}`);
  }
};

export const analyzeHandler = async (values: any) => {
  try {
    const resp = await axios.post(`${baseURL}/api/analyze`, values);
      return { message: resp?.data?.content, status: resp.status };
  } catch (error) {
    console.log(`error: ${JSON.stringify(error)}`);
  }
};
