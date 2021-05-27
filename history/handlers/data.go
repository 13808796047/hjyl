package handlers

import (
	"history/models"
	"net/http"

	"gitee.com/go-package/carbon"
	"github.com/gin-gonic/gin"
)

// 列表数据
func Index(c *gin.Context) {
	startDayTime := carbon.Now().StartOfDay()
	endDayTime := carbon.Now().EndOfDay()
	maps := make(map[string]interface{})
	if start_date := c.Query("startTime"); start_date != "" {
		maps["start_date"] = carbon.Parse(start_date).ToTimestamp()
	} else {
		maps["start_date"] = startDayTime
	}

	if end_date := c.Query("startTime"); end_date != "" {
		maps["start_date"] = carbon.Parse(end_date).ToTimestamp()
	} else {
		maps["start_date"] = endDayTime
	}
	result := models.GetDatas(maps)
	c.JSON(http.StatusOK, gin.H{
		"code": 1,
		"data": result,
	})
}
