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
# Block Style Classes Configuration
#--------------------------------------------------#

	# Define labels and styles to be applied to class selectors in the interface of the RTE
	# The examples included here make partial re-use of color scheme and frame scheme from CSS Styled Content extension
RTE.classes >  
RTE.classes {
	box_blue  {  
        name = Blue Box  
        # CSS Styling für das Pulldown im RTE  
        value = background-color: #C1E3FF; border: 1px solid #005191; color: #005191;  
    }  
    box_orange {  
         name = Orange Box  
        # CSS Styling für das Pulldown im RTE  
        value = background-color: #FEF3DE; border: 1px solid #F8B323; color: #F8B323;  
    }  	
}

#--------------------------------------------------#
# Anchor Classes Configuration
#--------------------------------------------------#

	# Anchor classes configuration for use by the anchor accesibility feature (htmlArea RTE only)
RTE.classesAnchor {
	externalLink {
		class = external-link
		type = url
		titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:external_link_titleText
	}
	externalLinkInNewWindow {
		class = external-link-new-window
		type = url
		titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:external_link_new_window_titleText
	}
	internalLink {
		class = internal-link
		type = page
		titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:internal_link_titleText
	}
	internalLinkInNewWindow {
		class = internal-link-new-window
		type = page
		titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:internal_link_new_window_titleText
	}
	download {
		class = download
		type = file
		titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:download_titleText
	}
	mail {
		class = mail
		type = mail
		titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:mail_titleText
	}
}

#--------------------------------------------------#
# RTE Configuration
#--------------------------------------------------#

RTE.default {

	#--------------------------------------------------#
	# Tag Restrictions Configuration
	#--------------------------------------------------#
	
		# Markup options (htmlArea RTE only)
	enableWordClean = 1
	removeTrailingBR = 1
	removeComments = 1
	
		#These HTML Tag will be removed
	removeTags = center, font, o:p, sdfield,
	removeTagsAndContents = link, meta, script, style, title

		# Das "class" Attribut muss beim "p" tag erlaubt werden  
    entryHTMLparser_db = 1  
    entryHTMLparser_db {  
        tags {  
            p.allowedAttribs = class  
        }  
    }  
  
	#--------------------------------------------------#
	# Button Configuration
	#--------------------------------------------------#
	
		# Toolbar options
		# The TCA configuration may add buttons to the toolbar
		# The following buttons are specific to Classic RTE: class
		# The following buttons are specific to htmlArea RTE: blockstylelabel, blockstyle, textstylelabel, textstyle,
		#	insertcharacter, findreplace, removeformat, toggleborders, tableproperties,
		#	rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit,
		#	columninsertbefore, columninsertafter, columndelete, columnsplit,
		#	cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
		#
		# The folloging buttons are possible:
		# 	blockstylelabel, blockstyle, textstylelabel, textstyle, fontstyle, fontsize, formatblock, 
		# 	bold, italic, underline, strikethrough, subscript, superscript, lefttoright, righttoleft, 
		# 	left, center, right, justifyfull, orderedlist, unorderedlist, outdent, indent, textcolor, 
		# 	bgcolor, textindicator, emoticon, insertcharacter, line, link, image, table, user, acronym, 
		# 	findreplace, spellcheck, chMode, inserttag, removeformat, copy, cut, paste, undo, redo, 
		# 	showhelp, about, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, 
		# 	rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, 
		# 	cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
	showButtons (
		underline, strikethrough, bold, italic,
		formatblock,
		blockstyle, blockstylelabel,
		orderedlist, unorderedlist, 
		insertcharacter,
		link, findreplace, chMode, removeformat, undo, redo, about,
		copy, cut, paste,
	)
	
		# Configuration specific to the bold and italic buttons (htmlArea RTE only)
		# Add hotkeys associated with bold and italic buttons
	buttons.bold.hotKey = b
	buttons.italic.hotKey = i
	buttons.strikethrough.hotKey = s
	buttons.underline.hotkey = u
	
		# More toolbar options (htmlArea RTE only)
	keepButtonGroupTogether = 1

		# Enable status bar (htmlArea RTE only)
	showStatusBar =  1

	#--------------------------------------------------#
	# FormatBlock Configuration
	#--------------------------------------------------#
		
		# Hide infrequently used paragraph types in the paragraph type selector (formatblock button)
	hidePStyleItems = pre,address,h6,h5,h4,blockquote,div
	
	#--------------------------------------------------#
	# Stylesheet of Classes Configuration
	#--------------------------------------------------#
		
		# Use stylesheet file rather than the above mainStyleOverride and inlineStyle properties to style the contents (htmlArea RTE only).
		# When RTE.default.contentCSS is not specified, file EXT:rtehtmlarea/res/contentcsss/default.css is used.
	ignoreMainStyleOverride = 1 	
		# Zuweisung der CSS-Datei  
    contentCSS = fileadmin/data_[projectname]/layout/ext/rte/template.css
	showTagFreeClasses = 1
	

	#--------------------------------------------------#
	# Allowed Classes Configuration
	#--------------------------------------------------#
	
		## List all class selectors that are allowed on the way to the database
	proc.allowedClasses (
		external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail,
		indent,box_blue, box_orange
	)
	

	#--------------------------------------------------#
	# Restriction of specific Classes Configuration
	#--------------------------------------------------#	
	
		## classesParagraph, classesTable, classesTD, classesLinks, classesCharacter
		## Classic RTE: Specify the list of class selectors that should be presented in the RTE interface:
		## htmlArea RTE: Restrict the list of class selectors presented by the RTE to the following:
	classesParagraph (
		box_blue, box_orange,
	)
	classesTable = 
	classesTD = 
	classesLinks = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
	classesCharacter = 
	classesAnchor = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail
	classesAnchor.default {
		page = internal-link
		url = external-link-new-window
		file = download
		mail = mail
	}

	#--------------------------------------------------#
	# Table Operations Configuration
	#--------------------------------------------------#
	
		# Configuration specific to the TableOperations feature (htmlArea RTE only)
		# Remove the following fieldsets from the table operations dialogs
	disableAlignmentFieldsetInTableOperations = 1
	disableSpacingFieldsetInTableOperations = 1
	disableColorFieldsetInTableOperations = 1
	disableLayoutFieldsetInTableOperations = 1
	disableBordersFieldsetInTableOperations = 1
		# Show borders on table creation
	buttons.toggleborders.setOnTableCreation = 1
}  
  
#--------------------------------------------------#
# Frontend RTE Configuration
#--------------------------------------------------#

	# front end RTE configuration for the general public (htmlArea RTE only)
RTE.default.FE < RTE.default
RTE.default.FE.showStatusBar = 0
RTE.default.FE.hideButtons = chMode, blockstyle, textstyle, underline, strikethrough, subscript, superscript, lefttoright, righttoleft, left, center, right, justifyfull, table, inserttag, findreplace, removeformat, copy, cut, paste
RTE.default.FE.FE >
RTE.default.FE.userElements >
RTE.default.FE.userLinks >