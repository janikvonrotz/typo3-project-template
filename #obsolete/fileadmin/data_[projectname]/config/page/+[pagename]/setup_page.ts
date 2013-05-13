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

page = PAGE
page{
	typeNum = 0	
	#--------------------------------------------------#
	#    Shortcut Icon
	#--------------------------------------------------#	
	shortcutIcon = {$fileadmin_root}/layout/page/{$mainpage_name}/res/favicon.ico		
	#--------------------------------------------------#
	#    Meta
	#--------------------------------------------------#		
	meta.keywords.data = DB:pages:{$rootpage_id}:keywords
	meta.keywords.override.field = keywordsmeta
	meta.description.data = DB:pages:{$rootpage_id}:description
	meta.description.override.field = description
	meta.abstract.data = DB:pages:{$rootpage_id}:abstract
	meta.abstract.override.field = abstract
	meta.author.data = DB:pages:{$rootpage_id}:author
	meta.author.override.field = author
}
#--------------------------------------------------#
#    tt Content
#--------------------------------------------------#
    #Sitemap
tt_content.menu.20.2.entryLevel = {$sitemap_page_id}
    #Add class for all default div text containers
tt_content.text.20.wrap = <div class="rte">|</div>
    # removes blank <dd> tags >> valid XHTML
tt_content.image.20.caption.if.isTrue.field = imagecaption
#--------------------------------------------------#
#    Template
#--------------------------------------------------#
page.10 = TEMPLATE
page.10{

	template = FILE
	template.file = {$fileadmin_root}/layout/page/{$mainpage_name}/template_master.html			
	#--------------------------------------------------#
	#    Subparts
	#--------------------------------------------------#	
	workonsubpart=DOCUMENT
	subparts{		
		#--------------------------------------------------#
		#    Header Title
		#--------------------------------------------------#
		HEADER = TEXT
		HEADER{
			field = title      
		}
		HEADER.wrap = <H1>|</H1>		
		#--------------------------------------------------#
		#    Logo
		#--------------------------------------------------#
		LOGO = IMAGE
		LOGO{
			file = {$fileadmin_root}/layout/page/{$mainpage_name}/res/ow_logo.gif
			altText = 
			titleText = 
			linkWrap = <a href="{$base_url}">|</a>
		}		
		#--------------------------------------------------#
		#    Content
		#--------------------------------------------------#
		CONTENT_CENTER < styles.content.get
		SIDEBAR < styles.content.getBorder
		TEASER < styles.content.getRight		
		#--------------------------------------------------#
		#    Searchbox
		#--------------------------------------------------#
		SEARCH = COA_INT
		SEARCH {
			10 = TEXT
			10{
				typolink.parameter = 6
				#typolink.additionalParams = &L={$language_spanish_id}
				typolink.returnLast = url
				wrap ( <!-- searchbox begin -->
					<form name="search" id="search" class="search" action="|" method="post">
					<label id="searchLabel" for="searchQuery">suchen</label>
					<input type="text" size="15" name="tx_indexedsearch[sword]" id="searchQuery" value="" />
					<input class="hidden" type="hidden" name="tx_indexedsearch[_sections]" value="0" />
					<input type="hidden" name="tx_indexedsearch[pointer]" value="0" />
					<input type="hidden" name="tx_indexedsearch[ext]" value="0" />
					<input type="hidden" name="tx_indexedsearch[lang]" value="0" />
					<button class="submit" name="tx_indexedsearch[submit_button]" type="submit" value="search">search</button>
					</form>
					<!-- searchbox end -->
				)
			}
		}

#TypoScript Constants
plugin.tx_indexedsearch.searchUID = 25
		
		#--------------------------------------------------#
		#    Navigation
		#--------------------------------------------------#
		NAVIGATION = HMENU
		#--------------------------------------------------#
		#    Navigation List
		#--------------------------------------------------#
		NAVIGATION{
			entryLevel = {$entryLevel}
			wrap = <ul>|</ul>
			1 = TMENU
			1.NO.linkWrap = <li>|</li>

			1.CUR = 1
			1.CUR.linkWrap = <li class="active"><a href="#">|</a></li>
			1.CUR.doNotLinkIt = 1	
		}		
		#--------------------------------------------------#
		#    Navigation Breadcrumb
		#--------------------------------------------------#		
		# NAVIGATION{
			# special = rootline
			# special.range = 3|-1
			
			# 1 = TMENU
			# 1.wrap = <p>|</p>
			# 1 {
				# NO.linkWrap = | >
				
				# NO.stdWrap2.noTrimWrap = | | |
				
				# CUR < .NO
				# CUR = 1
				# CUR {
					# linkWrap = |
					# doNotLinkIt = 1
				# }
			# }
		# }
		
		#--------------------------------------------------#
		#    Language
		#--------------------------------------------------#
		LANGUAGE = COA
		#--------------------------------------------------#
		#    Language Selection Dropdown
		#--------------------------------------------------#
		#LANGUAGE{
			# wrap = <div class="language">|</div>
			# 5 = TEXT
			# 5.value (
				# <script language="JavaScript">
					# <!--
					# function QuickJump(Formular) {
						# var Element = Formular.Ziel.selectedIndex;
						# if (Formular.Ziel.options[Element].value != 0) {
							# location = Formular.Ziel.options[Element].value;
						# }   
					# }
					# //-->
				# </script>
				# )
			# 7 = TEXT
			# 7.value = Sprache
			# 7.wrap = <h1>|</h1>
			# 8 = TEXT
			# 8.value = <form name="Formular"><select name="Ziel" onchange="QuickJump(this.form);" style="width: 155px;">
			# 9 = TEXT
			# 9.value = <option value=""></option>
		
				# #German
			# 10 = TEXT
			# 10{
				# wrap = <option value="|">German</option>
				# typolink.parameter.data = page:alias // TSFE:id
				# typolink.additionalParams = &L={$language_german_id}
				# typolink.returnLast = url
			# }
			
				# #English
			# 20 = TEXT
			# 20{
				# wrap = <option value="|">English</option>
				# typolink.parameter.data = page:alias // TSFE:id
				# typolink.additionalParams = &L={$language_english_id}
				# typolink.returnLast = url
			# }
			
				# #French
			# 30 = TEXT
			# 30{
				# wrap = <option value="|">French</option>
				# typolink.parameter.data = page:alias // TSFE:id
				# typolink.additionalParams = &L={$language_french_id}
				# typolink.returnLast = url
			# }
			
				# #Spanish
			# 40 = TEXT
			# 40{
				# wrap = <option value="|">Spanish</option>
				# typolink.parameter.data = page:alias // TSFE:id
				# typolink.additionalParams = &L={$language_spanish_id}
				# typolink.returnLast = url
			# }
			
				# #Dutch
			# 50 = TEXT
			# 50{
				# wrap = <option value="|">Dutch</option>
				# typolink.parameter.data = page:alias // TSFE:id
				# typolink.additionalParams = &L={$language_dutch_id}
				# typolink.returnLast = url
			# }
			
				# #Portugese
			# 60 = TEXT
			# 60{
				# wrap = <option value="|">Portugese</option>
				# typolink.parameter.data = page:alias // TSFE:id
				# typolink.additionalParams = &L={$language_portugese_id}
				# typolink.returnLast = url
			# }

			# 100 = TEXT
			# 100.value = </select></form>
		# }		
		#--------------------------------------------------#
		#    Language Selection vertical List
		#--------------------------------------------------#
		LANGUAGE{
				#German
			10 = TEXT
			10{
				wrap = <a href="|">German</a>
				typolink.parameter.data = page:alias // TSFE:id
				typolink.additionalParams = &L={$language_german_id}
				typolink.returnLast = url
			}
			
			15 = TEXT
			15.value = &nbsp;|&nbsp;
			
				#English
			20 = TEXT
			20{
				wrap = <a href="|">English</a>
				typolink.parameter.data = page:alias // TSFE:id
				typolink.additionalParams = &L={$language_english_id}
				typolink.returnLast = url
			}
			
			25 = TEXT
			25.value = &nbsp;|&nbsp;
			
				#French
			30 = TEXT
			30{
				wrap = <a href="|">French</a>
				typolink.parameter.data = page:alias // TSFE:id
				typolink.additionalParams = &L={$language_french_id}
				typolink.returnLast = url
			}
			
			35 = TEXT
			35.value = &nbsp;|&nbsp;
			
				#Spanish
			40 = TEXT
			40{
				wrap = <a href="|">Spanish</a>
				typolink.parameter.data = page:alias // TSFE:id
				typolink.additionalParams = &L={$language_spanish_id}
				typolink.returnLast = url
			}
			
			45 = TEXT
			45.value = &nbsp;|&nbsp;
			
				#Dutch
			50 = TEXT
			50{
				wrap = <a href="|">Dutch</a>
				typolink.parameter.data = page:alias // TSFE:id
				typolink.additionalParams = &L={$language_dutch_id}
				typolink.returnLast = url
			}
			
			55 = TEXT
			55.value = &nbsp;|&nbsp;
			
				#Portugese
			60 = TEXT
			60{
				wrap = <a href="|">Portugese</a>
				typolink.parameter.data = page:alias // TSFE:id
				typolink.additionalParams = &L={$language_portugese_id}
				typolink.returnLast = url
			}
		}
		
		FOOTER = COA
	}
}
#--------------------------------------------------#
#    Static content
#--------------------------------------------------#
# page.20 = TEXT
# page.20.value (
	# <!-- Piwik -->
	# <!-- End Piwik Tracking Code -->
# )