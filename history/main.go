package main

import (
	"github.com/13808796047/get-data/router"
)

func main() {
	router := router.InitRouter()
	router.Run(":8000")
}
