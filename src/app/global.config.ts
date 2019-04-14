
const baseConfig = {
  baseUrl: "http://moodbase.notyet.live/wp-json/wp/v2"
};

export const globalConfig = {

  api: {
    getQuestionnaire: `${baseConfig.baseUrl}/survey?id={id}`,
    getResults: `${baseConfig.baseUrl}/results?id={id}`,
    saveQuestionnaire: `${baseConfig.baseUrl}/answer`,
    getTeams: `${baseConfig.baseUrl}/projects`
  }
};
