#--------------------------------------------------#
#    Title: Typo3 RSS Feed Lib
#--------------------------------------------------#
#    File name: RSS.ts
#    Description: [Description]
#    Tags: typo3, typoscript, rss, template, lib, page
#    Project: [Projectname]
#
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: 25.05.2012
#    Last Edit Date: 25.05.2012
#    Version: 1.0.0
#
#    License:
#    This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

lib.rssTemplate = COA
lib.rssTemplate {

  1 = LOAD_REGISTER
  1 { 
    pageid = {$rss_page_id}
    contentid = {$rss_content_id}
    copyright = {$rss_copyright}
    language =

          #RSS Image
    image_width = 128
    image_height = 128
    image_description = RSS Image
    image_url = {$fileadmin_root}/layout/page/{$mainpage_name}/img/rss.png

          #Default values for items
    item_author.data = DB:pages:{$rootpage_id}:author
     item_author.override.field = author
    
    item_author_email.data = DB:pages:{$rootpage_id}:author_email
     item_author_email.override.field = author_email

  }

  10 = TEMPLATE
  10 {

    template = FILE
    template.file = {$fileadmin_root}/layout/page/{$mainpage_name}/rss.xml

    marks {

      RSS_title = TEXT
      RSS_title.field = title

      RSS_description = TEXT
      RSS_description.field = description

      RSS_link = TEXT
      RSS_link.value = {getIndpEnv:TYPO3_SITE_URL}index.php?type={register:type}
      RSS_link.insertData = 1

      RSS_copyright = TEXT
      RSS_copyright.data = register:copyright

      RSS_language = TEXT
      RSS_language.data = register:language

      RSS_image_url = TEXT
      RSS_image_url.value = {getIndpEnv:TYPO3_SITE_URL}{register:image_url}
      RSS_image_url.insertData = 1

      RSS_image_link = TEXT
      RSS_image_link.value = {getIndpEnv:TYPO3_SITE_URL}index.php?type={register:type}
      RSS_image_link.insertData = 1

      RSS_image_width = TEXT
      RSS_image_width.data = register:image_width

      RSS_image_height = TEXT
      RSS_image_height.data = register:image_height

      RSS_image_description = TEXT
      RSS_image_description.data = register:image_description

      RSS_pubDate = TEXT
      RSS_pubDate {
        data = register:SYS_LASTCHANGED
        date = r
      }

      RSS_lastBuildDate = TEXT
      RSS_lastBuildDate {
        data = register:SYS_LASTCHANGED
        date = r
      }

      RSS_ITEMS = COA
      RSS_ITEMS {
        1 = LOAD_REGISTER
        1 {
          pages.cObject = CONTENT
          pages.cObject {
            table = tt_content

            select {
              pidInList.dataWrap = {register:pageid}
              where.dataWrap = uid= {register:contentid}
              languageField = sys_language_uid
              insertData = 1
            }

            renderObj = TEXT
            renderObj {
              field = pages
            }
          }
        }

        10 = HMENU
        10 {
          special = list
          special.value.data = register:pages
          wrap = |
          1 = TMENU
          1 {
            target = {$PAGE_TARGET}
            noBlur = 1

            NO {
              doNotLinkIt = 1
              doNotShowLink = 1
              stdWrap2 {

                cObject = COA
                cObject {
                  1 = LOAD_REGISTER
                  1 {
                    title {
                      field = title
                      htmlSpecialChars = 1
                    }

                    subtitle {
                      field = subtitle
                      noTrimWrap = | : | |
                      required = 1
                      htmlSpecialChars = 1
                    }

                    link_and_guid {
                      typolink {
                        parameter.field = uid
                        returnLast = url
                      }
                      wrap = {getIndpEnv:TYPO3_SITE_URL}|
                      insertData = 1
                    }

                    guid.cObject = TEXT
                    guid.cObject {
                      value = {getIndpEnv:TYPO3_SITE_URL}index.php?id={field:uid}
                      insertData = 1
                    }

                    page_author_email {
                      data = field:author_email // register:item_author_email
                    }
                  }

                  10 = TEXT
                  10 {
                    data = field:abstract // field:description
                    wrap = <description><![CDATA[|]]></description>
                    required = 1
                    htmlSpecialChars = 1
                    # output kosmetik
                    prepend = TEXT
                    prepend.char = 10
                    append = TEXT
                    append.char = 10
                  }

                  15 = TEXT
                  15 {
                    data = field:author // register:item_author
                    wrap = <author>{register:page_author_email} (|)</author>
                    insertData = 1
                    required = 1
                    # output kosmetik
                    append = TEXT
                    append.char = 10
                  }

                  40 = TEXT
                  40 {
                    wrap = <pubDate>|</pubDate>
                    data = field:lastUpdated // field:tstamp // field:crdate
                    date = r
                    # output kosmetik
                    append = TEXT
                    append.char = 10
                  }

                }
              }

              allWrap (
              <item>
                <title>{register:title}{register:subtitle}</title>
                <link>{register:link_and_guid}</link>
                <guid>{register:guid}</guid>
                |
              </item>
              )
              allWrap.insertData = 1
            }
          }
        }
      }
    }
  }
}