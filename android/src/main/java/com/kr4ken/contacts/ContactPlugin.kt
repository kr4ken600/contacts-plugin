package com.kr4ken.contacts

import com.getcapacitor.Logger

class ContactPlugin {

    fun echo(value: String): String {
        Logger.info("Echo", value)
        return value
    }
}
