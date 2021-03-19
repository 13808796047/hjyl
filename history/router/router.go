package router

import (
	"github.com/13808796047/history/handlers"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.Default()
	router.GET("datas", handlers.Index)
	return router
}
