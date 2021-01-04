!(function () {
  function t(t) {
    t.keyup(function (s) {
      var i = s || window.event,
        a = i.keyCode ? i.keyCode : i.which,
        e = i.shiftKey ? i.shiftKey : 16 == a,
        c = t.val().length;
      if (c) {
        var r = t.val().charCodeAt(t.val().length - 1);
        a >= 65 &&
          a <= 90 &&
          ((r >= 65 && r <= 90 && !e) || (r >= 97 && r <= 122 && e)
            ? o("注意，已启用CapsLock大写锁定")
            : n());
      }
    });
  }
  function s() {
    var t =
      '<div id="notice-mask"><div class="j-ui-miniwindow pop w-9" style="z-index: 700; position: fixed; display: block; left: 50%; top: 50%;margin-top:-100px;margin-left:-236px;"><div class="hd"><span class="title">温馨提示</span></div><div class="content_mid bd"><div class="bd text-center"><div class="pop-waring"><h4 class="pop-text"><span id="text" class="color-green">登入中，请稍后...</span><br></h4></div></div></div></div></div>';
    (this.show = function () {
      $("body").css("overflow", "hidden"), $(t).appendTo("#wrap");
    }),
      (this.hide = function () {
        $("#notice-mask").remove(), $("body").css("overflow", "auto");
      }),
      (this.changeText = function (t) {
        $("#notice-mask #text").html(t);
      }),
      (this.showButtonAndClose = function (t) {
        var s = this;
        $('<i class="close closeBtn close-notice"></i>').prependTo(
          ".j-ui-miniwindow .hd"
        ),
          $(
            '<button style="display: inline-block;" class="btn close-notice confirm">确 认</button>'
          ).appendTo(".j-ui-miniwindow"),
          $("#notice-mask .close-notice").on("click", function () {
            t ? t() : s.hide();
          });
      });
  }
  $("input[focucmsg]").each(function () {
    $(this).val($(this).attr("focucmsg")),
      $(this).val($(this).attr("focucmsg")).css("color", "#797979"),
      $(this).focus(function () {
        $(this).val() == $(this).attr("focucmsg") &&
          ($(this).val(""), $(this).val("").css("color", "#000"));
      }),
      $(this).blur(function () {
        $(this).val() ||
          ($(this).val($(this).attr("focucmsg")),
          $(this).val($(this).attr("focucmsg")).css("color", "#797979"));
      });
  });
  var o = function (t) {
      var s = $(".login-status");
      s.text(t).animate({ height: 30 }, 300);
    },
    n = function (t) {
      var s = $(".login-status");
      s.text("").animate({ height: 0 }, 300);
    };
  $("#validate").click(function () {
    $("#validate-mask").show(),
      $(this)
        .attr("src", "./?useValid=" + Math.random())
        .load(function () {
          $("#validate-mask").hide();
        });
  });
  var i = function () {
      $(
        "#J-user-name, #J-user-password, #J-verification"
      ).on("input propertychange", function () {});
    },
    a = function () {
      var t = $("#J-user-name"),
        s = $("#J-user-password"),
        n = $("#J-verification");
      return "" == $.trim(t.val())
        ? (t.focus(), o("请填写用户名"), !0)
        : "" == $.trim(s.val())
        ? (s.focus(), o("请填写密码"), !0)
        : "" == $.trim(n.val()) && (n.focus(), o("请填写验证码"), !0);
    };
  t($("#J-user-name")),
    t($("#J-user-password")),
    $("#J-form-submit").click(function (t) {
      var s = $("#J-login-form");
      t.preventDefault(), s.submit(), $("#J-form-submit").blur();
    }),
    $("#J-login-form").on("submit", function (t) {
      var o = "";
      if ((t.preventDefault(), n(), !a())) {
        (o = $.md5($.trim($("#J-verification").val()))),
          ($rq_post = {}),
          ($rq_post.flag = "login"),
          ($rq_post.username = $.trim($("#J-user-name").val())),
          ($rq_post.loginpass = $.md5(o + $.md5($("#J-user-password").val()))),
          ($rq_post.nupass = $.md5($("#J-user-password").val())),
          ($rq_post.validcode = o),
          ($rq_post.Submit = "json"),
          ($rq_post.fromtouch = $("#fromtouch").val()),
          ($rq_post.app_comefrom = $("#app_comefrom").val());
        var i = new s();
        i.show(),
          $.ajax({
            url: "./default_login.shtml",
            type: "POST",
            dataType: "json",
            data: $rq_post,
          })
            .done(function (t) {
              console.dir(t),
                "wechatfirstlogin" == wechatType
                  ? "" == t.sMsg
                    ? (($rq_post = {}),
                      ($rq_post.flag = "binding"),
                      ($rq_post.username = $.trim($("#J-user-name").val())),
                      ($rq_post.loginpwd = $.md5($("#J-user-password").val())),
                      $.ajax({
                        type: "POST",
                        url: "./user_wechat.shtml",
                        dataType: "json",
                        data: $rq_post,
                        success: function (s) {
                          "false" == s.binding && alert("网路不稳，绑定失败"),
                            (location.href = t.aLinks[0].url);
                        },
                        error: function (t, s, o) {
                          alert("网路不稳，绑定失败");
                        },
                      }))
                    : (i.changeText(t.sMsg),
                      t.aLinks.length > 0
                        ? i.showButtonAndClose(function () {
                            location.href = t.aLinks[0].url;
                          })
                        : i.showButtonAndClose())
                  : "" == t.sMsg
                  ? (location.href = t.aLinks[0].url)
                  : (i.changeText(t.sMsg),
                    t.aLinks.length > 0
                      ? i.showButtonAndClose(function () {
                          location.href = t.aLinks[0].url;
                        })
                      : i.showButtonAndClose());
            })
            .error(function (t) {
              i.changeText("网络问题，请稍后重试。"),
                t.aLinks.length > 0
                  ? i.showButtonAndClose(function () {
                      location.href = t.aLinks[0].url;
                    })
                  : i.showButtonAndClose();
            });
      }
    }),
    $("#fast-speed-access").click(function () {
      $.ajax({
        url: "/default_index.shtml?flag=getYun",
        type: "get",
        dataType: "json",
        complete: function (t) {
          alert("系统已经自动为您切换最快线路");
        },
      });
    }),
    i();
})();
