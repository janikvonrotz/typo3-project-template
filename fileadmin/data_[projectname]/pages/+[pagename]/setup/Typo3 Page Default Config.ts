#--------------------------------------------------#
#    Title: Typo3 Page Default Config
#--------------------------------------------------#
#    File name:  config.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup, page
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
#    This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Switzerland License.
#    To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ch/ or
#    send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
#--------------------------------------------------#

config {
   
  #--------------------------------------------------#
  #    Spamprotection
  #--------------------------------------------------#
   
  spamProtectEmailAddresses = 1
  spamProtectEmailAddresses_atSubst = (at)

  #--------------------------------------------------#
  #    Language Configuration
  #--------------------------------------------------#
 
  linkVars = L
    #Set default Language
  language = de
  locale_all = de_DE.UTF8
  htmlTag_langKey = de-DE
  sys_language_uid = {$language_default_id}
 
#--------------------------------------------------#
#    Extended Language Configuration
#--------------------------------------------------#

     #Only show content elements which match the chosen language
     #Options: content_fallback, strict, ignore
sys_language_mode = content_fallback
     #Don't show no translated content elements
     #Options: 0;hideNonTranslated; 1
#sys_language_overlay = hideNoneTranslated
  #--------------------------------------------------#
  #    HTML Output
  #--------------------------------------------------#

doctype=xhtml_trans
htmlTag_setParams = xmlns="http://www.w3.org/1999/xhtml"
     #Exclude Typo3 JavaScript
removeDefaultJS=1
baseURL = {$base_url}
     #Remove Comments
disablePrefixComment = 1
     #No header data from TYPO3
disableAllHeaderCode = 0
     #Xhtml Cleaning
xhtml_cleaning = all
     #utf-8 support for multilanguage
renderCharset = utf-8
additionalHeaders = Content-Type:text/html;charset=utf-8
     # Don't Cache this site
no_cache = 0

  #--------------------------------------------------#
  #    Link & Url
  #--------------------------------------------------#
 
    #Simulate static documents
  # simulateStaticDocuments = 1
  # simulateStaticDocuments_noTypeIfNoTitle = 1  
    #Real URL
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
    #File-Target TypoLink
  fileTarget = _blank 
    #Anker Tag setzen
  prefixLocalAnchors = all
 
#--------------------------------------------------#
#    RSS Feed Output
#--------------------------------------------------#

   # #No header data from TYPO3
# disableAllHeaderCode = 1
     # #type and charset settings
# additionalHeaders = Content-type:text/xml;charset=utf-8
     # #Don't Cache this site
# no_cache = 1
     # #Xhtml Cleaning
# xhtml_cleaning = 0

  #--------------------------------------------------#
  #    Typo3 Backend
  #--------------------------------------------------#
 
    #Enable Feedit Admin Panel
  admPanel = 1
 
}

#--------------------------------------------------#
#   Default Extension Language
#--------------------------------------------------#

plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$language_default_id}

#--------------------------------------------------#
#    Multilanguage und Extension Language
#--------------------------------------------------#

  #German
[globalVar = GP:L = {$language_german_id}] || [TSFE:sys_language_uid = {$language_german_id}]
config{
  language = de
  locale_all = de_DE.UTF8
  htmlTag_langKey = de-DE
  sys_language_uid = {$language_german_id}
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$language_german_id}
[global]
[globalVar = GP:L = {$language_german_id}] || [TSFE:sys_language_uid = {$language_german_id}] && [browser = msie]
config.htmlTag_setParams = xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xml:lang="de"
[global]

  #English
[globalVar = GP:L = {$language_english_id}] || [TSFE:sys_language_uid = {$language_english_id}]
config{
  language = en
  locale_all = en_EN.UTF8
  htmlTag_langKey = en-EN
  sys_language_uid = {$language_english_id}
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$language_english_id}
[global]
[globalVar = GP:L = {$language_english_id}] || [TSFE:sys_language_uid = {$language_english_id}] && [browser = msie]
config.htmlTag_setParams = xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xml:lang="en"
[global]

  #French
[globalVar = GP:L = {$language_french_id}] || [TSFE:sys_language_uid = {$language_french_id}]
config{
  language = fr
  sys_language_uid = {$language_french_id}
  locale_all = fr_FR.UTF8
  htmlTag_langKey = fr-FR
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$language_french_id}
[global]
[globalVar = GP:L = {$language_french_id}] || [TSFE:sys_language_uid = {$language_french_id}] && [browser = msie]
config.htmlTag_setParams = xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xml:lang="fr"
[global]

  #Spanish
[globalVar = GP:L = {$language_spanish_id}] || [TSFE:sys_language_uid = {$language_spanish_id}]
config{
  language = es
  locale_all = es_ES.UTF8
  htmlTag_langKey = es-ES
  sys_language_uid = {$language_spanish_id}
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$language_spanish_id}
[global]
[globalVar = GP:L = {$language_spanish_id}] || [TSFE:sys_language_uid = {$language_spanish_id}] && [browser = msie]
config.htmlTag_setParams = xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xml:lang="es"
[global]

  #Dutch
[globalVar = GP:L = {$language_dutch_id}] || [TSFE:sys_language_uid = {$language_dutch_id}]
config{
  language = nl
  locale_all = nl_NL.UTF8
  htmlTag_langKey = nl-NL
  sys_language_uid = {$language_dutch_id}
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$language_dutch_id}
[global]
[globalVar = GP:L = {$language_dutch_id}] || [TSFE:sys_language_uid = {$language_dutch_id}] && [browser = msie]
config.htmlTag_setParams = xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xml:lang="nl"
[global]

  #Portugese
[globalVar = GP:L = {$language_portugese_id}] || [TSFE:sys_language_uid = {$language_portugese_id}]
config{
  language = pt
  locale_all = pt_PT.UTF8
  htmlTag_langKey = pt-PT
  sys_language_uid = {$language_portugese_id}
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = {$language_portugese_id}
[global]
[globalVar = GP:L = {$language_portugese_id}] || [TSFE:sys_language_uid = {$language_portugese_id}] && [browser = msie]
config.htmlTag_setParams = xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xml:lang="pt"
[global]
