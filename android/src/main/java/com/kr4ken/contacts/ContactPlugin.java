package com.kr4ken.contacts;

import com.getcapacitor.Logger;

public class ContactPlugin {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
