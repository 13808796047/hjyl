package main

import (
	"history/router"
)

func main() {
	router := router.InitRouter()
	router.Run(":8000")
}
