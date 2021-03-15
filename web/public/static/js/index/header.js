$(function () {
  $(document).on(
    "mouseenter",
    "#global-zeroclipboard-html-bridge",
    function () {
      $("#toolbar .screen").addClass("toolbar-active");
      $("#J-side-bar").addClass("J-side-bar-acive");
    }
  );
  $(document).on(
    "mouseleave",
    "#global-zeroclipboard-html-bridge",
    function () {
      $("#toolbar .screen").removeClass("toolbar-active");
      $("#J-side-bar").removeClass("J-side-bar-acive");
    }
  );
  $(document).on("click", ".refresh", function () {
    //自动刷新
    $.ajax({
      url: "/user/getuserbalance.html",
      dataType: "json",
      method: "GET",
      success: function (r) {
        if (Number(r["isSuccess"]) == 1) {
          $(".J-balance-show").text(r["availablebalance"]);
          $(".J-usdt-show").text(r["usdt_total"]);
        }
      },
    });
  });
  // if hideAmt is click, set cookie state to hide || show. Also toggle amount DOM
  var currentState;
  $(".hideAmt")
    .unbind("click")
    .bind("click", function () {
      var allcookies = document.cookie;
      var newState;
      cookiearray = allcookies.split(";");
      for (var i = 0; i < cookiearray.length; i++) {
        if (cookiearray[i].indexOf("state") === 1) {
          currentState = cookiearray[i].split("=")[1];
          break;
        }
      }
      if (currentState === "hide") {
        newState = "show";
        $(this).removeClass("iconhide");
      } else {
        newState = "hide";
        $(this).addClass("iconhide");
      }
      document.cookie = "state=" + newState + ";";
      $(".J-balance-show").toggle();
      $(".J-balance-star").toggle();
      $(".refresh").toggle();
      var src = $(this).attr("src");
      var newsrc =
        src == window["CDN"] + "/sy2/images/matt/eye-open-white.png"
          ? window["CDN"] + "/sy2/images/matt/eye-close-white.png"
          : window["CDN"] + "/sy2/images/matt/eye-open-white.png";
      $(this).attr("src", newsrc);
    });
  // When web page reload get state value from cookie, if state is show, show amount. If state is hide, hide amount
  if (document.readyState === "interactive") {
    var allcookies = document.cookie;
    cookiearray = allcookies.split(";");
    for (var i = 0; i < cookiearray.length; i++) {
      if (cookiearray[i].indexOf("state") === 1) {
        currentState = cookiearray[i].split("=")[1];
      }
    }

    if (currentState === "show") {
      $(".hideAmt").attr(
        "src",
        window["CDN"] + "/sy2/images/matt/eye-open-white.png"
      );
      $(".J-balance-show").show();
      $(".J-balance-star").hide();
      $(".refresh").show();
    } else {
      $(".hideAmt").attr(
        "src",
        window["CDN"] + "/sy2/images/matt/eye-close-white.png"
      );
      $(".J-balance-show").hide();
      $(".J-balance-star").show();
      $(".refresh").hide();
      $(".hideAmtli ").addClass("iconhide");
    }
  }
});
//警告视窗
function styleAlert(message) {
  var height = $(document).height();
  $alert = $(
    '<div class="j-ui-miniwindow pop w-9" style="z-index: 700; position: fixed; display: block; left: 0; top:0; bottom:0; right:0; margin:auto; height:150px;"><div class="hd"><i class="close closeBtn"></i><span class="title">温馨提示</span></div><div class="bd"><div class="bd text-center"><div class="pop-waring"><i class="ico-waring <#=icon-class#>"></i><h4 class="pop-text" style="max-width:310px"><span>' +
      message +
      '</span><br></h4></div></div></div><a style="display: none;" href="javascript:void(0);" class="btn confirm">确 认<b class="btn-inner"></b></a><a style="display: none;" href="javascript:void(0);" class="btn cancel">取 消<b class="btn-inner"></b></a><a href="javascript:void(0);" style="display: inline-block;" class="btn closeTip">关 闭<b class="btn-inner"></b></a></div><div class="j-ui-mask" style="position: absolute; left: 0px; top: 0px; opacity: 0.5; z-index: 600; width: 100%; height: ' +
      height +
      'px; display: block; background-color: rgb(51, 51, 51);"></div>'
  );
  $(parent.document).find("body").append($alert);
  $(parent.document)
    .find(".closeTip, .closeBtn")
    .click(function () {
      $(parent.document).find($alert).remove();
    });
}
// 這是用 flash 元件 使用複製功能
function SetHome(obj, url) {
  try {
    obj.style.behavior = "url(#default#homepage)";
    obj.setHomePage(url);
  } catch (e) {
    if (window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege(
          "UniversalXPConnect"
        );
      } catch (e) {
        styleAlert(
          "抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'"
        );
      }
    } else {
      styleAlert(
        "抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" +
          url +
          "】设置为首页。"
      );
      $("#lan > div.j-ui-miniwindow.pop.w-9").css("height", "+=30px");
    }
  }
}

// IE11 沒有使用權限...所以這個 function 除了 Mozilla 可以用之外 都只是提示 Ctrl+D
function add_favorite(e) {
  var title = $(e).attr("data-url");
  var url = $(e).attr("data-title");
  var ctrl =
    navigator.userAgent.toLowerCase().indexOf("mac") != -1
      ? "Command/Cmd"
      : "CTRL";

  // if (window.external && "addFavorite" in window.external) {
  try {
    if (window.external || document.all) {
      // 下面這個沒效囉...無存取權限
      styleAlert("您可以尝试通过快捷键 CTRL + D 加入到收藏夹~");
    } else if (window.sidebar && window.sidebar.addPanel) {
      // for Mozilla
      window.sidebar.addPanel(url, title);
    } else {
      // mac
      styleAlert("您可以尝试通过快捷键 CTRL + D 加入到收藏夹~");
    }
  } catch (error) {
    styleAlert("您可以尝试通过快捷键 CTRL + D 加入到收藏夹~");
  }
}

var totalUnreadInterval = null;
function getUnreadMessageCount(elem_id) {
  $.ajax({
    type: "GET",
    url: "/messenger.php",
    async: true,
    data: {
      action: "totalUnread",
    },
    timeout: 5000,
    dataType: "json",
  })
    .then(function (result) {
      if (!result.error) {
        if (result.success) {
          toggleMsgCount(elem_id, result.data.count);
        } else {
          clearInterval(totalUnreadInterval);
          totalUnreadInterval = null;
        }
      } else {
        if (totalUnreadInterval) {
          clearInterval(totalUnreadInterval);
          totalUnreadInterval = null;
        }
      }
    })
    .fail(function () {
      if (totalUnreadInterval) {
        clearInterval(totalUnreadInterval);
        totalUnreadInterval = null;
      }
    });
}

function toggleMsgCount(elem_id, count) {
  if (count > 0) {
    $("#" + elem_id).text(count);
    $("#" + elem_id).show();
  } else {
    $("#" + elem_id).hide();
  }
}
