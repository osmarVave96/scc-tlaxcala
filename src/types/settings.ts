export interface IHomePageData {
  header: Array<IHeader>;
  first_section: ISectionCards;
  second_section: ISectionCards;
  third_section: ISectionCards;
}

export interface IClimateGovernancePageData {
  header: Array<IHeader>;
  first_section: ISectionCards;
  second_section: ISectionCards;
  third_section: ISectionCards;
  fourth_section: ISectionCards;
}

export interface IClimateInformationPageData {
  header:         Array<IHeader>;
  first_section:  ISectionCards;
  second_section: ISectionCards;
  third_section:  ISectionCards;
  fourth_section: ISectionCards;
}

export interface ISiteSettingsData {
  id:                            number;
  header_logo:                   string;
  footer_logo:                   string;
  background_email_image:        string;
  header_logo_el_ban:            null;
  footer_logo_el_ban:            null;
  background_email_image_el_ban: null;
  url_fb:                        string;
  url_instagram:                 string;
  url_x:                         string;
  icon_fb:                       string;
  icon_instagram:                string;
  icon_x:                        string;
  buttons_color:                 string;
  primary_text_color:            string;
  icon1:                         null;
  icon1_el_ban:                  null;
  has_electoral_ban:             boolean;
}

export interface ISectionCards {
  id?: number;
  items?: Array<IItemsSectionCards>;
  section: string;
  title_1: string;
  title_2: string;
  title_3: string;
  boton_texto: string;
  button_text: string;
  button_action_url: string;
  button1_action_url: string;
  button_text1: string;
  button2_action_url: string;
  button_text2: string;
  action_redirect?: string;
};

export interface IItemsSectionCards {
  id: number;
  title: string;
  image: string;
  order: number;
  section: number;
  catalog_section: number | null;
  description: string;
  action_redirect?: string;
  boton_texto?: string;
  button_text?: string;
  button_action_url?: string;
}

export interface IHeader {
  id: number;
  title1: string;
  title2: string;
  title2_color: string;
  title3: string;
  button_action_text: string;
  button_action_url: string;
  video_internal: string | null;
  image_internal: string;
}