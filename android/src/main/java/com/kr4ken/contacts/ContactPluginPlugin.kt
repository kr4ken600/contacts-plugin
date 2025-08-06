package com.kr4ken.contacts

import android.app.Activity
import com.getcapacitor.*
import com.getcapacitor.annotation.CapacitorPlugin

import com.salesforce.android.smi.core.CoreConfiguration
import com.salesforce.android.smi.ui.UIClient
import com.salesforce.android.smi.ui.UIConfiguration

import java.net.URL
import java.util.*

@CapacitorPlugin(name = "ContactPlugin")
class ContactPluginPlugin : Plugin() {

    @PluginMethod
    fun echo(call: PluginCall) {
        val implementation = ContactPlugin()
        val value = call.getString("value")

        val ret = JSObject()
        ret.put("value", implementation.echo(value ?: ""))
        call.resolve(ret)
    }

    @PluginMethod
    fun openMessaging(call: PluginCall) {
        val serviceUrlStr = call.getString("Url")
        val orgId = call.getString("OrganizationId")
        val developerName = call.getString("DeveloperName")

        if (serviceUrlStr.isNullOrEmpty() || orgId.isNullOrEmpty() || developerName.isNullOrEmpty()) {
            call.reject("Missing parameters: serviceUrl, orgId, or developerName")
            return
        }

        val serviceUrl = try {
            URL(serviceUrlStr)
        } catch (e: Exception) {
            call.reject("Invalid serviceUrl format")
            return
        }

        try {
            val coreConfig = CoreConfiguration(serviceUrl, orgId, developerName)
            val uiConfig = UIConfiguration(coreConfig, UUID.randomUUID())

            val activity: Activity = activity
            UIClient.Factory.create(uiConfig)
                .openConversationActivity(activity)

            call.resolve()
        } catch (e: Exception) {
            call.reject(e.message)
        }
    }
}
