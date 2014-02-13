#--------------------------------------------------#
#    Title: Typo3 Share Lib
#--------------------------------------------------#
#    File name: Share.ts
#    Description: [Description]
#    Tags: typo3, typoscript, lib, page
#    Project: [Projectname]
#
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: 22.05.2012
#    Last Edit Date: 22.05.2012
#    Version: 1.0.0
#
#    License:
#    This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

lib.SHARE = COA
lib.SHARE {

     #--------------------------------------------------#
     #   Facebook
     #   http://developers.facebook.com/docs/share/
     #--------------------------------------------------# 

    10 = TEXT
    10 {
        value = Facebook
        typolink.title = Facebook
        typolink.ATagParams = class="link facebook"
          typolink.extTarget = _blank
         
        typolink.parameter.cObject = COA
        typolink.parameter.cObject {
            10 = TEXT
            10{
                    dataWrap = https://www.facebook.com/sharer.php?u={$base_url}|
                    typolink.parameter.data = TSFE:id
                    typolink.returnLast = url
                    typolink.addQueryString = 1
                    typolink.addQueryString.exclude = id
               }
        }
    }
 
     #--------------------------------------------------#
     #   Twitter
     #   https://dev.twitter.com/docs/tweet-button
     #--------------------------------------------------# 

    20 = TEXT
    20 {
        value = Twitter
        typolink.title = Twitter
        typolink.ATagParams = class="link twitter"
          typolink.extTarget = _blank
         
        typolink.parameter.cObject = COA
        typolink.parameter.cObject {
            10 = TEXT
            10{
                    dataWrap = https://twitter.com/home/?status={$base_url}|
                    typolink.parameter.data = TSFE:id
                    typolink.returnLast = url
                    typolink.addQueryString = 1
                    typolink.addQueryString.exclude = id
               }
        }
    }
    
     #--------------------------------------------------#
     #   Google +
     #   https://developers.google.com/+/plugins/share/
     #--------------------------------------------------# 

    30 = TEXT
    30 {
        value = Google+
        typolink.title = Google+
        typolink.ATagParams = class="link gplus"
          typolink.extTarget = _blank
         
        typolink.parameter.cObject = COA
        typolink.parameter.cObject {
            10 = TEXT
            10{
                    dataWrap = https://plus.google.com/share?url={$base_url}|
                    typolink.parameter.data = TSFE:id
                    typolink.returnLast = url
                    typolink.addQueryString = 1
                    typolink.addQueryString.exclude = id
               }
        }
    }
    
     #--------------------------------------------------#
     #   LinkedIn
     #   https://developer.linkedin.com/plugins
     #--------------------------------------------------# 

    40 = TEXT
    40 {
        value = LinkedIn
        typolink.title = LinkedIn
        typolink.ATagParams = class="link linkedin"
          typolink.extTarget = _blank
         
        typolink.parameter.cObject = COA
        typolink.parameter.cObject {
            10 = TEXT
            10{
                    dataWrap = https://www.linkedin.com/shareArticle?url={$base_url}|
                    typolink.parameter.data = TSFE:id
                    typolink.returnLast = url
                    typolink.addQueryString = 1
                    typolink.addQueryString.exclude = id
               }
        }
    }
}