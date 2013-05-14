#--------------------------------------------------#
#    Title: [File-Title]
#--------------------------------------------------#
#    File-Type: [File-Type]
#    Description: [Description]
#    Project: [Projectname]
# 
#    Author: Janik von Rotz
#    Author E-Mail: contact@janikvonrotz.ch
#
#    Create Date: dd.mm.yyyy hh.mm
#    Last Edit Date: dd.mm.yyyy hh.mm
#    Version: 0.0.0
#--------------------------------------------------#

#--------------------------------------------------#
#    Constants
#--------------------------------------------------#

# cat=website settings; type=string; label= the path to the project fileadmin root
fileadmin_root = fileadmin/[...]/data_[projectname]

# cat=website settings; type=string; label= the URL to your blog homepage
base_url = [http://.../]

# cat=website settings; type=int+; label= root page id (point where the navigation starts)
rootpage_id = [id_number]

# cat=website settings; type=string; label= foldername of the mainpage
mainpage_name = [pagename]

# cat=website settings; type=int+; label= sitemap page id (point where the sitemap starts)
sitemap_page_id = [id_number]

# cat=website settings; type=int+; label= set the entry level nummber
entryLevel = [id_number]

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

#--------------------------------------------------#
#    Setup
#--------------------------------------------------#

<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/setup_config.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/setup_page.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/[...]/data_[projectname]/config/page/[pagename]/setup_layout.ts">

#--------------------------------------------------#
#    Page TSConfig
#--------------------------------------------------#

    #TSCONF
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config/page/+[pagename]/tsconfig.ts">

    #TCEMAIN
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config\page/+[pagename]/tcemain.ts">

    #TCEFORM
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config\page/+[pagename]/tceform.ts">

    #Backend-editor
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/data_[projectname]/config/page/+[pagename]/be_editor_custom.ts">
