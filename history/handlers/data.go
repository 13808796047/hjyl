package handlers

import (
	"net/http"

	"history/models"

	"github.com/gin-gonic/gin"
)

// 列表数据
func Index(c *gin.Context) {
	start_date := c.DefaultQuery("start_date", "")

	maps := make(map[string]interface{})
	maps["time"] = start_date
	result := models.GetDatas(maps)
	c.JSON(http.StatusOK, gin.H{
		"code": 1,
		"data": result,
	})
}
