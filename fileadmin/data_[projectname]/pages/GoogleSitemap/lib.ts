#--------------------------------------------------#
# Title: Google Sitemap Page Setup
#--------------------------------------------------#
# File name: GoogleSitemap.ts
# Description: 
# Tags: typo3, typoscript, setup, page, google, sitemap
# Project: 
#
# Author: Janik von Rotz
# Author Contact: www.janikvonrotz.ch
#
# Create Date: 2013-05-14
# Last Edit Date: 2013-05-14
# Version: 1.0.0
#
# License: 
# This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
# To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or 
# send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

SiteMap = PAGE
SiteMap {

	typeNum = 0
	
	#--------------------------------------------------#
	# configurations
	#--------------------------------------------------#
	config {
		no_cache = 1
		disableAllHeaderCode = 1
		additionalHeaders = Content-Type: text/xml; charset=utf-8
		simulateStaticDocuments = 0
		absRefPrefix = {$base_url}
		tx_realurl_enable = 1
	}
	
	#--------------------------------------------------#
	# sitemap content
	#--------------------------------------------------#
	
	10 = COA
	10 {
	
		wrap (
			<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="http://www.google.com/schemas/sitemap/0.84"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.google.com/schemas/sitemap/0.84 www.google.com/schemas/sitemap/0.84/sitemap.xsd"
			>|</urlset>
		)
		
		#--------------------------------------------------#
		# site tree
		#--------------------------------------------------#
		
		10 = HMENU
		10 {
			special = directory
			special.value = {$sitemap_page_id}
			includeNotInMenu = {$gmap_include_not_in_menu}
			excludeUidList = {$gmap_exclude_uid_list}
			# menu level 1
			1 = TMENU
			1 {
				# show all menu leves
				expAll = 1
				NO {
					# no link in xml
					doNotLinkIt = 1
					stdWrap {
						cObject = COA
						cObject {
						
							# sitemap element
							wrap = <url>|</url>
							
							# location property
							10 = TEXT
							10 {
								typolink {
									parameter.field = uid
									returnLast = url
								}
								wrap = <loc>|</loc>
							}
							
							# last modification property
							20 = TEXT
							20 {
								field = SYS_LASTCHANGED
								strftime = %Y-%m-%dT%H:%M:%SZ
								wrap = <lastmod>|</lastmod>
							}
							
							# priority property
							30 = TEXT
							30.value = <priority>1.0</priority><changefreq>weekly</changefreq>
							
							# no shortcuts in xml menu
							if.isFalse.field = shortcut
						}
					}
				}
			}
			# menu level 2
			2 < .1
			2.NO.stdWrap.cObject.30.value = <priority>0.9</priority><changefreq>weekly</changefreq>
			
			# menu level 3
			3 < .1
			3.NO.stdWrap.cObject.30.value = <priority>0.8</priority><changefreq>monthly</changefreq>
			
			# menu level 4
			4 < .1
			4.NO.stdWrap.cObject.30.value = <priority>0.7</priority><changefreq>monthly</changefreq>
			
			# menu level 5
			5 < .1
			5.NO.stdWrap.cObject.30.value = <priority>0.6</priority><changefreq>monthly</changefreq>
			
			# menu level 6
			6 < .1
			6.NO.stdWrap.cObject.30.value = <priority>0.5</priority><changefreq>monthly</changefreq>
			
			# menu level 7
			7 < .6
			
			# menu level 8
			8 < .6
			
			# menu level 9
			9 < .6
			
			# menu level 10
			10 < .6
		}
	   
		#--------------------------------------------------#
		# tt_news items
		#--------------------------------------------------#
	   
		20 = CONTENT
		20 {
		
			# get news items for record store
			table = tt_news
			select {
				orderBy = title ASC
				languageField = sys_language_uid
				pidInList = {$gmap_pid_tt_news_records}
			}
			
			renderObj = COA
			renderObj {
			
				# sitemap element
				stdWrap.wrap = <url>|</url>
				
				# location property
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
				
				# last modification property
				20 = TEXT
				20 {
					field = date
					strftime = %Y-%m-%dT%H:%M:%SZ
					wrap = <lastmod>|</lastmod>
				}
				
				# priority property
				30 = TEXT
				30.value = <priority>0.7</priority><changefreq>weekly</changefreq>
			}
		}
	}
 }