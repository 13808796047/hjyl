!(function () {
  function t() {
    (this.show = function () {
      $("body").css("overflow", "hidden"),
        $(
          '<div id="notice-mask"><div class="j-ui-miniwindow pop w-9" style="z-index: 700; position: fixed; display: block; left: 50%; top: 50%;margin-top:-200px;margin-left:-236px;"><div class="hd"><span class="title">温馨提示</span></div><div class="content_mid bd"><div class="bd text-center"><i class="ico-waring"></i><h4 class="pop-text"><span id="text">登入中，请稍后...</span><br></h4></div></div></div></div>'
        ).appendTo("#wrap");
    }),
      (this.hide = function () {
        $("#notice-mask").remove(), $("body").css("overflow", "auto");
      }),
      (this.changeText = function (t) {
        $("#notice-mask #text").html(t);
      }),
      (this.showButtonAndClose = function (t) {
        var i = this;
        $('<i class="close closeBtn close-notice"></i>').prependTo(
          ".j-ui-miniwindow .hd"
        ),
          $(
            '<button style="display: inline-block;" class="btn close-notice confirm">确 认</button>'
          ).appendTo(".j-ui-miniwindow"),
          $("#notice-mask .close-notice").on("click", function () {
            t ? t() : i.hide();
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
  var i = function (t) {
      $(".login-status")
        .text(message[t] || t)
        .animate(
          {
            height: 50,
          },
          300
        );
    },
    s = function (t) {
      $(".login-status").text("").animate(
        {
          height: 0,
        },
        300
      );
    };
  $("#validate").click(function () {
    $(this).attr("src", "./?useValid=" + Math.random());
  });
  var n = function () {
    var t = $("#J-user-name"),
      s = $("#J-user-password"),
      n = $("#J-verification");
    return "" == $.trim(t.val())
      ? (t.focus(), i(message["请填写用户名"]), !0)
      : "" == $.trim(s.val())
      ? (s.focus(), i(message["请填写密码"]), !0)
      : "" == $.trim(n.val()) && (n.focus(), i(message["验证码不能为空"]), !0);
  };
  $("#J-form-submit").click(function (t) {
    var i = $("#J-login-form");
    t.preventDefault(), i.submit();
  }),
    $("#J-login-form").on("submit", function (o) {
      var a = "";
      o.preventDefault(),
        s(),
        n() ||
          ((a = $.trim($("#J-verification").val())),
          ($rq_post = {}),
          ($rq_post.flag = "login"),
          ($rq_post.username = $.trim($("#J-user-name").val())),
          ($rq_post.loginpass = $("#J-user-password").val()),
          ($rq_post.validcode = a),
          ($rq_post.pinf = $pcinfoid),
          ($rq_post.Submit = "json"),
          window.appData &&
            (($rq_post.clientVersion = appData.clientVersion),
            ($rq_post.SetupLocationPath = appData.SetupLocationPath)),
          $.ajax({
            url: "{:url('/login/login')}",
            type: "POST",
            dataType: "json",
            data: $rq_post,
          })
            .done(function (s) {
              var n = s.sMsg.match(/^\[warning\] (.*)$/);
              n
                ? (function (i, s) {
                    var n = new t();
                    n.show(),
                      n.changeText(s),
                      n.showButtonAndClose(function () {
                        location.href = i;
                      });
                  })(s.aLinks[0].url, n[1])
                : "" == s.sMsg
                ? (location.href = s.aLinks[0].url)
                : (i(s.sMsg),
                  setTimeout(function () {
                    $("#validate").trigger("click");
                  }, 300));
            })
            .error(function (t) {
              i(message["网络问题，请稍后重试。"]);
            }));
    }),
    $("#fast-speed-access").click(function () {
      $.ajax({
        url: "/default_index.html?flag=getYun",
        type: "get",
        dataType: "json",
        complete: function (t) {
          alert(message["系统已经自动为您切换最快线路"]);
        },
      });
    }),
    (function () {
      $("#J-user-name, #J-user-password, #J-verification").on(
        "input propertychange",
        function () {
          0 !== $(".login-status").height() && s();
        }
      );
    })();
})();
