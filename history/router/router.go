package router

import (
	"github.com/gin-gonic/gin"
	"history/handlers"
)

func InitRouter() *gin.Engine {
	router := gin.Default()
	router.GET("datas", handlers.Index)
	return router
}
