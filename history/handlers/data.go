package handlers

import (
	"net/http"

	model "github.com/13808796047/history/models"
	"github.com/gin-gonic/gin"
)

// 列表数据
func Index(c *gin.Context) {
	var user model.User
	result := user.getDatas()
	c.JSON(http.StatusOK, gin.H{
		"code": 1,
		"data": result,
	})
}
