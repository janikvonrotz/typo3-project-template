#--------------------------------------------------#
#    Title: Group Settings TSCconfig
#--------------------------------------------------#
#    File name:  tsconfig.ts
#    Description: [Description]
#    Tags: typoscript, typo3, group, tsconfig
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

     # Verschiedene Benutzer-Optionen
options {
          # Folgendes fügt in das Menü einer bearbeiteten Seite die Funktionen
          # zum Löschen des Seiten- (.pages) und des gesamten Frontend-Caches (.all)
          # ein. Insbesondere ist dies für Nicht-Admin-Benutzer interessant, die das
          # grundsätzlich nicht dürften und daher diese Optionen nicht standardmäßig
          # angeboten bekommen.

     clearCache.pages = 1
     clearCache.all = 1

          # Seiten-IDs im Seitenbaum in eckigen Klammern vor dem Seitennamen anzeigen
     pageTree.showPageIdWithTitle = 1

          # Hiermit wird die Anzahl an Klemmbrettern eingestellt.
          # Möglich sind Werte von 0-20
     clipboardNumberPads = 1

          # Inhalt des Klemmbretts bis zum nächsten Login speichern.
     saveClipboard = 1

          # Seitenbaum nicht an der entsprechenden Stelle öffnen, wenn eine
          # Seite über "Edit ID" bearbeitet wird.
     shortcut_onEditId_dontSetPageTree = 1

          # Shortcut-Frame im unteren Bereich des Backend anzeigen.
          # Das ist die Leiste, in der dann z.B. der Workspace ausgewählt werden
          # kann und ein Suchfeld vorhanden ist.
     shortcutFrame = 1

          # Icons in den Popup-Menüs auf der linken statt auf der rechten Seite darstellen.
     contextMenu.options.leftIcons = 1

}

     # Einstellungen des Setup-Moduls überschreiben
setup.override {

          # Den Frame-Rand zwischen Seitenbaum- und Inhalts-/List-Frame anzeigen.
          # Dadurch kann die Größe der Frames per Maus geändert werden.
    navFrameResizable = 1

          # Rich Text Editor grundsätzlich ausschalten (1 = einschalten)
    editRTE = 0
}

     #Konfig für Feedit Admin Panel
admPanel{
     enable.edit = 1
     enable.preview = 1
          # admPanel.module.edit.forceDisplayFieldIcons=1
     hide=1
     override.edit.displayFieldIcons = 1
     override.edit.displayIcons = 1
     override.preview.showHiddenPages = 1
}