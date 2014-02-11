#--------------------------------------------------#
#    Title: Typo3 Root Page Default Setup
#--------------------------------------------------#
#    File name:  root.ts
#    Description: [Description]
#    Tags: typo3, typoscript
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

#--------------------------------------------------#
#    Constants
#--------------------------------------------------#

# cat=website settings; type=string; label= the path to the project fileadmin root
fileadmin_root = fileadmin/[...]/data_[projectname]

# cat=website settings; type=string; label= foldername of the mainpage
mainpage_name = [pagename]

# cat=website settings; type=string; label= the URL to your homepage
base_url = [http://.../]

# cat=website settings; type=int+; label= root page id (point where the navigation starts)
rootpage_id = [id_number]

# cat=website settings; type=int+; label= sitemap page id (point where the sitemap starts)
sitemap_page_id = [id_number]

# cat=website settings; type=int+; label= search page id (point where the results should be displayed)
search_page_id = [id_number]

# cat=website settings; type=int+; label= set the entry level nummber
entryLevel = [entryLevel_number]

# cat=website language; type=int+; label= set id for English language
language_english_id = [id_number]

# cat=website language; type=int+; label= set id for French language
language_french_id = [id_number]

# cat=website language; type=int+; label= set id for Spanish language
language_spanish_id = [id_number]

# cat=website language; type=int+; label= set id for Dutch language
language_dutch_id = [id_number]

# cat=website language; type=int+; label= set id for Portugese language
language_portugese_id = [id_number]

# cat=website language; type=int+; label= set id for German language
language_german_id = [id_number]

# cat=website language; type=int+; label= set id for default language
language_default_id = [id_number]

# cat=rss settings; type=int+; label= rss page id (contains the content element)
rss_page_id = [id_number]

# cat=rss settings; type=int+; label= rss content id (content element contains rss pages)
rss_content_id = [id_number]

# cat=rss settings; type=string; label= rss copyright text
rss_copyright = [string]

#--------------------------------------------------#
#    Setup Page
#--------------------------------------------------#

<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/lang/default.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/lang/en.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/lib/[libname].ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/page.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/content.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/layout.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/ext/[extensionname]/setup.ts">

#--------------------------------------------------#
#    Setup RSS
#--------------------------------------------------#

<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/lib/rss.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/page.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/tssetup/config.ts">

#--------------------------------------------------#
#    Page TSConfig
#--------------------------------------------------#

    #TSCONF
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config/page/[pagename]/tsconfig/tsconfig.ts">

    #TCEMAIN
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config/page/[pagename]/tsconfig/tcemain.ts">

    #TCEFORM
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config/page/[pagename]/tsconfig/tceform.ts">

    #Backend-editor
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config/page/[pagename]/tsconfig/be_editor_custom.ts">
