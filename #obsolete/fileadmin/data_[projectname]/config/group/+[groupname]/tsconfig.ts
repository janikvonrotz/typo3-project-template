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

	# Verschiedene Benutzer-Optionen
options {
		# Folgendes f�gt in das Men� einer bearbeiteten Seite die Funktionen
		# zum L�schen des Seiten- (.pages) und des gesamten Frontend-Caches (.all)
		# ein. Insbesondere ist dies f�r Nicht-Admin-Benutzer interessant, die das
		# grunds�tzlich nicht d�rften und daher diese Optionen nicht standardm��ig
		# angeboten bekommen.

	clearCache.pages = 1
	clearCache.all = 1 

		# Seiten-IDs im Seitenbaum in eckigen Klammern vor dem Seitennamen anzeigen
	pageTree.showPageIdWithTitle = 1

		# Hiermit wird die Anzahl an Klemmbrettern eingestellt.
		# M�glich sind Werte von 0-20
	clipboardNumberPads = 1

		# Inhalt des Klemmbretts bis zum n�chsten Login speichern.
	saveClipboard = 1

		# Seitenbaum nicht an der entsprechenden Stelle �ffnen, wenn eine
		# Seite �ber "Edit ID" bearbeitet wird.
	shortcut_onEditId_dontSetPageTree = 1

		# Shortcut-Frame im unteren Bereich des Backend anzeigen.
		# Das ist die Leiste, in der dann z.B. der Workspace ausgew�hlt werden
		# kann und ein Suchfeld vorhanden ist.
	shortcutFrame = 1 

		# Icons in den Popup-Men�s auf der linken statt auf der rechten Seite darstellen.
	contextMenu.options.leftIcons = 1

} 

	# Einstellungen des Setup-Moduls �berschreiben
setup.override {

		# Den Frame-Rand zwischen Seitenbaum- und Inhalts-/List-Frame anzeigen.
		# Dadurch kann die Gr��e der Frames per Maus ge�ndert werden.
    navFrameResizable = 1 

		# Rich Text Editor grunds�tzlich ausschalten (1 = einschalten)
    editRTE = 0
}

	#Konfig f�r Feedit Admin Panel
admPanel{
	enable.edit = 1
	enable.preview = 1
		# admPanel.module.edit.forceDisplayFieldIcons=1
	hide=1
	override.edit.displayFieldIcons = 1
	override.edit.displayIcons = 1
	override.preview.showHiddenPages = 1
}