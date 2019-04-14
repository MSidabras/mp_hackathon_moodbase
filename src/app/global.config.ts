
const baseConfig = {
  baseUrl: "http://my-server.com/service"
};

export const globalConfig = {

  api: {
    getQuestionnaire: `${baseConfig}/survey/{id}`,
    saveQuestionnaire: `${baseConfig}/survey-result`
  }
};
