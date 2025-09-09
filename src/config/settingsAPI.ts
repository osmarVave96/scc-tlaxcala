class SettingsAPI {
    private static instance: SettingsAPI;
    private constructor() {}

    public static getInstance(): SettingsAPI {
        if (!SettingsAPI.instance) {
        SettingsAPI.instance = new SettingsAPI();
        }
        return SettingsAPI.instance;
    }
	static readonly GET_HOME_PAGE = "/home";
	static readonly GET_SITE_SETTINGS = "/site-settings";
	static readonly GET_CLIMATE_GOVERNANCE_PAGE = "/climate_governance";
	static readonly SUBSCRIBE_TO_NEWSLETTER = "/subscribe";

}

export default SettingsAPI;