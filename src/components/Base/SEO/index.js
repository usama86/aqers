import React from 'react'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

export default function SEO({
  title,
  description,
  canonical,
  type,
  url,
  siteName,
  ogImage,
  twitter,
  ogTag,
  noIndex,
  noFollow,
  hrefLang,
}) {
  const languageAlternates = [
    {
      hrefLang: 'en-pk',
      href: hrefLang,
    },
  ]
  const additionalMetaTags = [
    {
      name: 'copyright',
      content: 'Graana Group of Companies',
    },
  ]
  const meta = {
    title: title,
    description: description,
    openGraph: {
      type: type,
      url: url,
      title: title,
      description: description,
      site_name: siteName,
    },
  }
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      languageAlternates={languageAlternates}
      // meta={meta}
      additionalMetaTags={additionalMetaTags}
      openGraph={
        ogTag
          ? ogTag
          : {
              type: type,
              url: hrefLang,
              title: title,
              description: description,
              siteName: siteName,
              images: [
                {
                  url: ogImage,
                },
              ],
            }
      }
      twitter={twitter}
      nofollow={noFollow}
      noindex={noIndex}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  hrefLang: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
  siteName: PropTypes.string,
  ogImage: PropTypes.string,
  // twitter: PropTypes.object,
}
SEO.defaultProps = {
  title: '| Graana.com',
  description: 'Default Description',
  canonical: 'https://www.graana.com/',
  hrefLang: 'https://www.graana.com/',
  type: 'website',
  url: 'https://www.graana.com',
  siteName: 'Graana.com',
  ogImage:
    'https://res.cloudinary.com/graanacom/image/upload/v1609330881/graana_og.jpg',
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
}
