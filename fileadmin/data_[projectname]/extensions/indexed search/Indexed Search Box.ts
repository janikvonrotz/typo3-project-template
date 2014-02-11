#--------------------------------------------------#
#    Title: Indexed Search Box
#--------------------------------------------------#
#    File name:  content.ts
#    Description: [Description]
#    Tags: typo3, typoscript, tssetup, extension, indexed search
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

page.10.subparts.SEARCH = COA_INT
page.10.subparts.SEARCH {
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