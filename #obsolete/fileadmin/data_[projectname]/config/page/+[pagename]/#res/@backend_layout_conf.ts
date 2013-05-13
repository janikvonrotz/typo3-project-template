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

backend_layout {
	colCount = 4
	rowCount = 3
	rows {
		1 {
			columns {
				1 {
					name = Teaser
					colspan = 4
					colPos = 2
				}
			}
		}
		2 {
			columns {
				1 {
					name = Inhalt
					colspan = 3
					rowspan = 2
					colPos = 0
				}
				2 {
					name = Sidebar
					rowspan = 2
					colPos = 3
				}
			}
		}
		3 {
			columns {
			}
		}
	}
}
