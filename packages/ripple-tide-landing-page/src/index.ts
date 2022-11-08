import {
  getDynamicPageComponents,
  tidePageBaseMapping,
  tidePageBaseIncludes
} from '@dpc-sdp/ripple-tide-api'
import {
  landingPageComponentsMapping,
  landingPageComponentsIncludes
} from './mapping/page-components/page-components-mapping.js'
import type { RplTideMapping } from '@dpc-sdp/ripple-tide-api/types'
import {
  heroHeaderMapping,
  heroHeaderIncludes
} from './mapping/hero-header/hero-header-mapping.js'
import {
  primaryCampaignIncludes,
  primaryCampaignMapping
} from './mapping/primary-campaign/primary-campaign-mapping.js'
import {
  secondaryCampaignIncludes,
  secondaryCampaignMapping
} from './mapping/secondary-campaign/secondary-campaign-mapping.js'

const tideLandingPageModule: RplTideMapping = {
  component: '@dpc-sdp/ripple-tide-landing-page/component',
  schema: '@dpc-sdp/ripple-tide-landing-page/types',
  mapping: {
    ...tidePageBaseMapping({
      withSidebarSiteSectionNav: true,
      withSidebarContacts: true,
      withSidebarRelatedLinks: true,
      withSidebarSocialShare: true
    }),
    summary: 'field_landing_page_summary',
    background: (src) => {
      if (src.field_landing_page_bg_colour === 'grey') {
        return 'alt'
      }

      return 'default'
    },
    heroHeader: heroHeaderMapping,
    primaryCampaign: primaryCampaignMapping,
    secondaryCampaign: secondaryCampaignMapping,
    headerComponents: async (src) => {
      return await getDynamicPageComponents(
        src,
        'field_landing_page_header',
        landingPageComponentsMapping
      )
    },
    bodyComponents: async (src) => {
      return await getDynamicPageComponents(
        src,
        'field_landing_page_component',
        landingPageComponentsMapping
      )
    }
  },
  includes: [
    ...tidePageBaseIncludes({
      withSidebarSiteSectionNav: true,
      withSidebarContacts: true,
      withSidebarRelatedLinks: true,
      withSidebarSocialShare: true
    }),
    ...landingPageComponentsIncludes,
    ...heroHeaderIncludes,
    ...primaryCampaignIncludes,
    ...secondaryCampaignIncludes,
    'field_landing_page_header',
    'field_landing_page_component.field_paragraph_media.field_media_image',
    'field_landing_page_component.field_paragraph_topic',
    'field_landing_page_component.field_paragraph_media_gallery.field_gallery_media.field_media_image',
    'field_landing_page_component.field_paragraph_items.field_paragraph_reference.field_event_details',
    'field_landing_page_component.field_paragraph_items.field_paragraph_reference.field_topic',
    'field_landing_page_component.field_paragraph_items.field_paragraph_reference.field_featured_image.field_media_image',
    'field_landing_page_component.field_paragraph_items.field_paragraph_keydates',
    'field_landing_page_component.field_paragraph_items.field_paragraph_media.field_media_image',
    'field_landing_page_component.field_complex_image_media.field_media_image',
    'field_landing_page_component.field_paragraph_webform'
  ]
}

export default tideLandingPageModule

export {
  landingPageComponentsMapping,
  landingPageComponentsIncludes,
  basicTextIncludes,
  accordionIncludes,
  promoCardIncludes,
  navigationCardIncludes,
  keyDatesIncludes,
  statisticsGridIncludes
} from './mapping/page-components/page-components-mapping.js'
