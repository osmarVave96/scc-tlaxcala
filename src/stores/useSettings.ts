import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { IClimateGovernancePageData, IHomePageData, ISiteSettingsData } from "@/types/settings";

export const SettingsInitialState: ISiteSettingsData = {
	id: 0,
	header_logo: "",
	footer_logo: "",
	background_email_image: "",
	header_logo_el_ban: null,
	footer_logo_el_ban: null,
	background_email_image_el_ban: null,
	url_fb: "",
	url_instagram: "",
	url_x: "",
	icon_fb: "",
	icon_instagram: "",
	icon_x: "",
	buttons_color: "",
	primary_text_color: "",
	icon1: null,
	icon1_el_ban: null,
	has_electoral_ban: false,
};

export const HomePageInitialState: IHomePageData = {
	header: [],
	first_section: {
		id: 0,
		items: [],
		section: "",
		title_1: "",
		title_2: "",
		title_3: "",
		boton_texto: "",
		button_text: "",
		button_action_url: "",
	},
	second_section: {
		id: 0,
		items: [],
		section: "",
		title_1: "",
		title_2: "",
		title_3: "",
		boton_texto: "",
		button_text: "",
		button_action_url: "",
	},
	third_section: {
		id: 0,
		items: [],
		section: "",
		title_1: "",
		title_2: "",
		title_3: "",
		boton_texto: "",
		button_text: "",
		button_action_url: "",
	},
};

export const ClimateGovernancePageInitialState: IClimateGovernancePageData = {
	header: [],
	first_section: {
		id: 0,
		items: [],
		section: "",
		title_1: "",
		title_2: "",
		title_3: "",
		boton_texto: "",
		button_text: "",
		button_action_url: "",
	},
	second_section: {
		id: 0,
		items: [],
		section: "",
		title_1: "",
		title_2: "",
		title_3: "",
		boton_texto: "",
		button_text: "",
		button_action_url: "",
	},
	third_section: {
		id: 0,
		items: [],
		section: "",
		title_1: "",
		title_2: "",
		title_3: "",
		boton_texto: "",
		button_text: "",
		button_action_url: "",
	},
	fourth_section: {
		id: 0,
		items: [],
		section: "",
		title_1: "",
		title_2: "",
		title_3: "",
		boton_texto: "",
		button_text: "",
		button_action_url: "",
	},
};

export const useSettingsStore = create(
	devtools(
        combine([SettingsInitialState, HomePageInitialState, ClimateGovernancePageInitialState], (set, get) => ({
            setSettings: (settings: ISiteSettingsData) => set([settings, get()[1]]),
			setHomePage: (homePage: IHomePageData) => set([get()[0], homePage]),
			setClimateGovernancePageData: (climateGovernancePageData: IClimateGovernancePageData) => set([get()[0], get()[1], climateGovernancePageData]),
        }))
	)
);  