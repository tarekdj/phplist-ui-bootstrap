	    </div>
    </div> <!-- end #content -->

    <div id="right-bar" class="col-md-3">
    <?php echo $firstInstallButton?>
        <div id="context-menu" class="menutableright block">
            <h3>Navigation</h3>
            <?php print contextMenu(); ?>
        </div>
        <div id="recent" class="menutableright block">
            <?php print recentlyVisited(); ?>
        </div>
	    <div id="language">
            <?php print $languageswitcher; ?>
        </div>
	<div class="clear"></div>
<?php include dirname(__FILE__).'/rssfeed.php'; ?>  
	</div><!-- end #right-bar -->
	
	<div class="clear"></div>

</div> <!-- end #container -->

<div id="footer">
    <div class="container">
            <a target="_blank" href="https://phplist.com">&copy; phpList ltd.</a> - v<?php echo VERSION?>
        <div class="right">
            <a target="_blank" href="https://resources.phplist.com">Resources</a>&nbsp; |  
            <a target="_blank" href="http://twitter.com/phplist">twitter</a>
        </div>
    </div>
</div>

<script type="text/javascript" src="ui/phplist-ui-bootstrap/js/jquery-1.12.1.min.js"></script>
<script type="text/javascript" src="js/phplistapp.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootstrap/js/phpList3ToBootstrap.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootstrap/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootstrap/js/jcarousellite_1.0.1.min.js"></script>
<script type="text/javascript" src="ui/phplist-ui-bootstrap/js/phplist.js?v=<?php echo filemtime(dirname(__FILE__).'/js/phplist.js'); ?>"></script>

<script>
/* do not remove this from here */
$(document).ready(function(){
    if ( $('body').hasClass('invisible') ){
        myfunction();
    }
});
</script>