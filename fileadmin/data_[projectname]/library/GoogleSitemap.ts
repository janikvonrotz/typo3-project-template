SiteMap = PAGE
SiteMap {
	typeNum = 0
	config {
		no_cache = 1
		disableAllHeaderCode = 1
		additionalHeaders = Content-Type: text/xml; charset=utf-8
		simulateStaticDocuments = 0
		absRefPrefix = {$base_url}
		tx_realurl_enable = 1
	}
	10 = COA
	10 {
		wrap (
			<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="http://www.google.com/schemas/sitemap/0.84"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.google.com/schemas/sitemap/0.84 www.google.com/schemas/sitemap/0.84/sitemap.xsd"
			>|</urlset>
		)
		10 = HMENU
		10 {
			special = directory
			special.value = {$sitemap_page_id}
			includeNotInMenu = {$gmap_include_not_in_menu}
			excludeUidList = {$gmap_exclude_uid_list}
			1 = TMENU
			1 {
				expAll = 1
				NO {
					doNotLinkIt = 1
					stdWrap {
						cObject = COA
						cObject {
							wrap = <url>|</url>
							10 = TEXT
							10 {
								typolink {
									parameter.field = uid
									returnLast = url
								}
								wrap = <loc>|</loc>
							}
							20 = TEXT
							20 {
								field = SYS_LASTCHANGED
								strftime = %Y-%m-%dT%H:%M:%SZ
								wrap = <lastmod>|</lastmod>
							}
							30 = TEXT
							30.value = <priority>1.0</priority><changefreq>weekly</changefreq>
							if.isFalse.field = shortcut
						}
					}
				}
			}
			2 < .1
			2.NO.stdWrap.cObject.30.value = <priority>0.9</priority><changefreq>weekly</changefreq>
			3 < .1
			3.NO.stdWrap.cObject.30.value = <priority>0.8</priority><changefreq>monthly</changefreq>
			4 < .1
			4.NO.stdWrap.cObject.30.value = <priority>0.7</priority><changefreq>monthly</changefreq>
			5 < .1
			5.NO.stdWrap.cObject.30.value = <priority>0.6</priority><changefreq>monthly</changefreq>
			6 < .1
			6.NO.stdWrap.cObject.30.value = <priority>0.5</priority><changefreq>monthly</changefreq>
			7 < .6
			8 < .6
			9 < .6
			10 < .6
		}
	   
		20 = CONTENT
		20 {
			table = tt_news
			select {
				orderBy = title ASC
				languageField = sys_language_uid
				pidInList = {$gmap_pid_tt_news_records}
			}
			renderObj = COA
			renderObj {
				stdWrap.wrap = <url>|</url>
				10 = TEXT
				10 {
					typolink {
						parameter = {$gmap_pid_tt_news_detail_view}
						additionalParams = &tx_ttnews[tt_news]={field:uid}
						additionalParams.insertData = 1
						returnLast = url
					}
					wrap = <loc>|</loc>
				}
				20 = TEXT
				20 {
					field = date
					strftime = %Y-%m-%dT%H:%M:%SZ
					wrap = <lastmod>|</lastmod>
				}
				30 = TEXT
				30.value = <priority>0.7</priority><changefreq>weekly</changefreq>
			}
		}
	}
 }