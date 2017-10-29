{if !isset($content_only) || !$content_only}
      </main>{* #center_column *}
    {if isset($right_column_size) && !empty($right_column_size)}
      <aside id="right_column" class="col-xs-12 col-sm-{$right_column_size|intval}" role="navigation complementary">{$HOOK_RIGHT_COLUMN}</aside>
    {/if}
    </div>{* .row *}
  </div>{* #columns*}

  <footer id="footer">

    {if isset($HOOK_FOOTER)}
      <div class="container">
        <div class="row">{$HOOK_FOOTER}</div>
      </div>
    {/if}

  </footer>
  <div class="wrapper"></div>

{/if}
{include file="$tpl_dir./global.tpl"}
</div>
</div>
</div>
<script type="text/javascript" src="{$js_dir}custom.js"></script>
</body>
</html>
