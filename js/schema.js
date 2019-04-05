var LAYER_NUMBER = 98

var SCHEMA_GLOBAL = {
  "methods": [
    {
      "id": "1615239032",
      "method": "req_pq",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        }
      ],
      "type": "ResPQ"
    },
    {
      "id": "-1099002127",
      "method": "req_pq_multi",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        }
      ],
      "type": "ResPQ"
    },
    {
      "id": "-686627650",
      "method": "req_DH_params",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "p",
          "type": "string"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "public_key_fingerprint",
          "type": "long"
        },
        {
          "name": "encrypted_data",
          "type": "string"
        }
      ],
      "type": "Server_DH_Params"
    },
    {
      "id": "-184262881",
      "method": "set_client_DH_params",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "encrypted_data",
          "type": "string"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    {
      "id": "-784117408",
      "method": "destroy_auth_key",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    {
      "id": "1491380032",
      "method": "rpc_drop_answer",
      "params": [
        {
          "name": "req_msg_id",
          "type": "long"
        }
      ],
      "type": "RpcDropAnswer"
    },
    {
      "id": "-1188971260",
      "method": "get_future_salts",
      "params": [
        {
          "name": "num",
          "type": "int"
        }
      ],
      "type": "FutureSalts"
    },
    {
      "id": "2059302892",
      "method": "ping",
      "params": [
        {
          "name": "ping_id",
          "type": "long"
        }
      ],
      "type": "Pong"
    },
    {
      "id": "-213746804",
      "method": "ping_delay_disconnect",
      "params": [
        {
          "name": "ping_id",
          "type": "long"
        },
        {
          "name": "disconnect_delay",
          "type": "int"
        }
      ],
      "type": "Pong"
    },
    {
      "id": "-414113498",
      "method": "destroy_session",
      "params": [
        {
          "name": "session_id",
          "type": "long"
        }
      ],
      "type": "DestroySessionRes"
    },
    {
      "id": "-1705021803",
      "method": "contest.saveDeveloperInfo",
      "params": [
        {
          "name": "vk_id",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "age",
          "type": "int"
        },
        {
          "name": "city",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-878758099",
      "method": "invokeAfterMsg",
      "params": [
        {
          "name": "X",
          "type": "Type"
        },
        {
          "name": "msg_id",
          "type": "long"
        }
      ],
      "type": "X"
    },
    {
      "id": "1036301552",
      "method": "invokeAfterMsgs",
      "params": [
        {
          "name": "X",
          "type": "Type"
        },
        {
          "name": "msg_ids",
          "type": "Vector"
        }
      ],
      "type": "X"
    },
    {
      "id": "2018609336",
      "method": "initConnection",
      "params": [
        {
          "name": "X",
          "type": "Type"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "system_lang_code",
          "type": "string"
        },
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "proxy",
          "type": "flags.0?InputClientProxy"
        }
      ],
      "type": "X"
    },
    {
      "id": "-627372787",
      "method": "invokeWithLayer",
      "params": [
        {
          "name": "X",
          "type": "Type"
        },
        {
          "name": "layer",
          "type": "int"
        }
      ],
      "type": "X"
    },
    {
      "id": "-1080796745",
      "method": "invokeWithoutUpdates",
      "params": [
        {
          "name": "X",
          "type": "Type"
        }
      ],
      "type": "X"
    },
    {
      "id": "911373810",
      "method": "invokeWithMessagesRange",
      "params": [
        {
          "name": "X",
          "type": "Type"
        },
        {
          "name": "range",
          "type": "MessageRange"
        }
      ],
      "type": "X"
    },
    {
      "id": "-1398145746",
      "method": "invokeWithTakeout",
      "params": [
        {
          "name": "X",
          "type": "Type"
        },
        {
          "name": "takeout_id",
          "type": "long"
        }
      ],
      "type": "X"
    },
    {
      "id": "-1502141361",
      "method": "auth.sendCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": "453408308",
      "method": "auth.signUp",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": "-1126886015",
      "method": "auth.signIn",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": "1461180992",
      "method": "auth.logOut",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-1616179942",
      "method": "auth.resetAuthorizations",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-440401971",
      "method": "auth.exportAuthorization",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    {
      "id": "-470837741",
      "method": "auth.importAuthorization",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": "-841733627",
      "method": "auth.bindTempAuthKey",
      "params": [
        {
          "name": "perm_auth_key_id",
          "type": "long"
        },
        {
          "name": "nonce",
          "type": "long"
        },
        {
          "name": "expires_at",
          "type": "int"
        },
        {
          "name": "encrypted_message",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1738800940",
      "method": "auth.importBotAuthorization",
      "params": [
        {
          "name": "flags",
          "type": "int"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "bot_auth_token",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": "-779399914",
      "method": "auth.checkPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": "-661144474",
      "method": "auth.requestPasswordRecovery",
      "params": [],
      "type": "auth.PasswordRecovery"
    },
    {
      "id": "1319464594",
      "method": "auth.recoverPassword",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": "1056025023",
      "method": "auth.resendCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": "520357240",
      "method": "auth.cancelCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1907842680",
      "method": "auth.dropTempAuthKeys",
      "params": [
        {
          "name": "except_auth_keys",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1555998096",
      "method": "account.registerDevice",
      "params": [
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "app_sandbox",
          "type": "Bool"
        },
        {
          "name": "secret",
          "type": "bytes"
        },
        {
          "name": "other_uids",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "813089983",
      "method": "account.unregisterDevice",
      "params": [
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "other_uids",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-2067899501",
      "method": "account.updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        },
        {
          "name": "settings",
          "type": "InputPeerNotifySettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "313765169",
      "method": "account.getNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        }
      ],
      "type": "PeerNotifySettings"
    },
    {
      "id": "-612493497",
      "method": "account.resetNotifySettings",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "2018596725",
      "method": "account.updateProfile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "first_name",
          "type": "flags.0?string"
        },
        {
          "name": "last_name",
          "type": "flags.1?string"
        },
        {
          "name": "about",
          "type": "flags.2?string"
        }
      ],
      "type": "User"
    },
    {
      "id": "1713919532",
      "method": "account.updateStatus",
      "params": [
        {
          "name": "offline",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1430579357",
      "method": "account.getWallPapers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "account.WallPapers"
    },
    {
      "id": "-1374118561",
      "method": "account.reportPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "655677548",
      "method": "account.checkUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1040964988",
      "method": "account.updateUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "User"
    },
    {
      "id": "-623130288",
      "method": "account.getPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": "-906486552",
      "method": "account.setPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": "1099779595",
      "method": "account.deleteAccount",
      "params": [
        {
          "name": "reason",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "150761757",
      "method": "account.getAccountTTL",
      "params": [],
      "type": "AccountDaysTTL"
    },
    {
      "id": "608323678",
      "method": "account.setAccountTTL",
      "params": [
        {
          "name": "ttl",
          "type": "AccountDaysTTL"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-2108208411",
      "method": "account.sendChangePhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": "1891839707",
      "method": "account.changePhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "User"
    },
    {
      "id": "954152242",
      "method": "account.updateDeviceLocked",
      "params": [
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-484392616",
      "method": "account.getAuthorizations",
      "params": [],
      "type": "account.Authorizations"
    },
    {
      "id": "-545786948",
      "method": "account.resetAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1418342645",
      "method": "account.getPassword",
      "params": [],
      "type": "account.Password"
    },
    {
      "id": "-1663767815",
      "method": "account.getPasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "account.PasswordSettings"
    },
    {
      "id": "-1516564433",
      "method": "account.updatePasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "new_settings",
          "type": "account.PasswordInputSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "457157256",
      "method": "account.sendConfirmPhoneCode",
      "params": [
        {
          "name": "hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": "1596029123",
      "method": "account.confirmPhone",
      "params": [
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1151208273",
      "method": "account.getTmpPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    {
      "id": "405695855",
      "method": "account.getWebAuthorizations",
      "params": [],
      "type": "account.WebAuthorizations"
    },
    {
      "id": "755087855",
      "method": "account.resetWebAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1747789204",
      "method": "account.resetWebAuthorizations",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-1299661699",
      "method": "account.getAllSecureValues",
      "params": [],
      "type": "Vector<SecureValue>"
    },
    {
      "id": "1936088002",
      "method": "account.getSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector"
        }
      ],
      "type": "Vector<SecureValue>"
    },
    {
      "id": "-1986010339",
      "method": "account.saveSecureValue",
      "params": [
        {
          "name": "value",
          "type": "InputSecureValue"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureValue"
    },
    {
      "id": "-1199522741",
      "method": "account.deleteSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1200903967",
      "method": "account.getAuthorizationForm",
      "params": [
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    {
      "id": "-419267436",
      "method": "account.acceptAuthorization",
      "params": [
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        },
        {
          "name": "value_hashes",
          "type": "Vector"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1516022023",
      "method": "account.sendVerifyPhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": "1305716726",
      "method": "account.verifyPhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1880182943",
      "method": "account.sendVerifyEmailCode",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "account.SentEmailCode"
    },
    {
      "id": "-323339813",
      "method": "account.verifyEmail",
      "params": [
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-262453244",
      "method": "account.initTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "contacts",
          "type": "flags.0?true"
        },
        {
          "name": "message_users",
          "type": "flags.1?true"
        },
        {
          "name": "message_chats",
          "type": "flags.2?true"
        },
        {
          "name": "message_megagroups",
          "type": "flags.3?true"
        },
        {
          "name": "message_channels",
          "type": "flags.4?true"
        },
        {
          "name": "files",
          "type": "flags.5?true"
        },
        {
          "name": "file_max_size",
          "type": "flags.5?int"
        }
      ],
      "type": "account.Takeout"
    },
    {
      "id": "489050862",
      "method": "account.finishTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1881204448",
      "method": "account.confirmPasswordEmail",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "2055154197",
      "method": "account.resendPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-1043606090",
      "method": "account.cancelPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-1626880216",
      "method": "account.getContactSignUpNotification",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-806076575",
      "method": "account.setContactSignUpNotification",
      "params": [
        {
          "name": "silent",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1398240377",
      "method": "account.getNotifyExceptions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "compare_sound",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "flags.0?InputNotifyPeer"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-57811990",
      "method": "account.getWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": "-578472351",
      "method": "account.uploadWallPaper",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": "1817860919",
      "method": "account.saveWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "unsave",
          "type": "Bool"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-18000023",
      "method": "account.installWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1153722364",
      "method": "account.resetWallPapers",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "1457130303",
      "method": "account.getAutoDownloadSettings",
      "params": [],
      "type": "account.AutoDownloadSettings"
    },
    {
      "id": "1995661875",
      "method": "account.saveAutoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "low",
          "type": "flags.0?true"
        },
        {
          "name": "high",
          "type": "flags.1?true"
        },
        {
          "name": "settings",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "227648840",
      "method": "users.getUsers",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "Vector<User>"
    },
    {
      "id": "-902781519",
      "method": "users.getFullUser",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "UserFull"
    },
    {
      "id": "-1865902923",
      "method": "users.setSecureValueErrors",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        },
        {
          "name": "errors",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "749357634",
      "method": "contacts.getContactIDs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": "-995929106",
      "method": "contacts.getStatuses",
      "params": [],
      "type": "Vector<ContactStatus>"
    },
    {
      "id": "-1071414113",
      "method": "contacts.getContacts",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "contacts.Contacts"
    },
    {
      "id": "746589157",
      "method": "contacts.importContacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    {
      "id": "-1902823612",
      "method": "contacts.deleteContact",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "contacts.Link"
    },
    {
      "id": "1504393374",
      "method": "contacts.deleteContacts",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "269745566",
      "method": "contacts.deleteByPhones",
      "params": [
        {
          "name": "phones",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "858475004",
      "method": "contacts.block",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-448724803",
      "method": "contacts.unblock",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-176409329",
      "method": "contacts.getBlocked",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": "301470424",
      "method": "contacts.search",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Found"
    },
    {
      "id": "-113456221",
      "method": "contacts.resolveUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    {
      "id": "-728224331",
      "method": "contacts.getTopPeers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "correspondents",
          "type": "flags.0?true"
        },
        {
          "name": "bots_pm",
          "type": "flags.1?true"
        },
        {
          "name": "bots_inline",
          "type": "flags.2?true"
        },
        {
          "name": "phone_calls",
          "type": "flags.3?true"
        },
        {
          "name": "groups",
          "type": "flags.10?true"
        },
        {
          "name": "channels",
          "type": "flags.15?true"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "contacts.TopPeers"
    },
    {
      "id": "451113900",
      "method": "contacts.resetTopPeerRating",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-2020263951",
      "method": "contacts.resetSaved",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-2098076769",
      "method": "contacts.getSaved",
      "params": [],
      "type": "Vector<SavedContact>"
    },
    {
      "id": "-2062238246",
      "method": "contacts.toggleTopPeers",
      "params": [
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1673946374",
      "method": "messages.getMessages",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "-1332171034",
      "method": "messages.getDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_pinned",
          "type": "flags.0?true"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": "-591691168",
      "method": "messages.getHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "-2045448344",
      "method": "messages.search",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "from_id",
          "type": "flags.0?InputUser"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "238054714",
      "method": "messages.readHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": "469850889",
      "method": "messages.deleteHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "just_clear",
          "type": "flags.0?true"
        },
        {
          "name": "revoke",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": "-443640366",
      "method": "messages.deleteMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": "94983360",
      "method": "messages.receivedMessages",
      "params": [
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Vector<ReceivedNotifyMessage>"
    },
    {
      "id": "-1551737264",
      "method": "messages.setTyping",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-91733382",
      "method": "messages.sendMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-1194252757",
      "method": "messages.sendMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1888354709",
      "method": "messages.forwardMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "with_my_score",
          "type": "flags.8?true"
        },
        {
          "name": "grouped",
          "type": "flags.9?true"
        },
        {
          "name": "from_peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector"
        },
        {
          "name": "random_id",
          "type": "Vector"
        },
        {
          "name": "to_peer",
          "type": "InputPeer"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-820669733",
      "method": "messages.reportSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1460572005",
      "method": "messages.hideReportSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "913498268",
      "method": "messages.getPeerSettings",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "PeerSettings"
    },
    {
      "id": "-1115507112",
      "method": "messages.report",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1013621127",
      "method": "messages.getChats",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": "998448230",
      "method": "messages.getFullChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": "-599447467",
      "method": "messages.editChatTitle",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-900957736",
      "method": "messages.editChatPhoto",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-106911223",
      "method": "messages.addChatUser",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "fwd_limit",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-530505962",
      "method": "messages.deleteChatUser",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "164303470",
      "method": "messages.createChat",
      "params": [
        {
          "name": "users",
          "type": "Vector"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "651135312",
      "method": "messages.getDhConfig",
      "params": [
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random_length",
          "type": "int"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": "-162681021",
      "method": "messages.requestEncryption",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": "1035731989",
      "method": "messages.acceptEncryption",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": "-304536635",
      "method": "messages.discardEncryption",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "2031374829",
      "method": "messages.setEncryptedTyping",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "typing",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "2135648522",
      "method": "messages.readEncryptedHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "max_date",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1451792525",
      "method": "messages.sendEncrypted",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": "-1701831834",
      "method": "messages.sendEncryptedFile",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": "852769188",
      "method": "messages.sendEncryptedService",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": "1436924774",
      "method": "messages.receivedQueue",
      "params": [
        {
          "name": "max_qts",
          "type": "int"
        }
      ],
      "type": "Vector<long>"
    },
    {
      "id": "1259113487",
      "method": "messages.reportEncryptedSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "916930423",
      "method": "messages.readMessageContents",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": "71126828",
      "method": "messages.getStickers",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Stickers"
    },
    {
      "id": "479598769",
      "method": "messages.getAllStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": "-1956073268",
      "method": "messages.getWebPagePreview",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "234312524",
      "method": "messages.exportChatInvite",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "ExportedChatInvite"
    },
    {
      "id": "1051570619",
      "method": "messages.checkChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": "1817183516",
      "method": "messages.importChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "639215886",
      "method": "messages.getStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": "-946871200",
      "method": "messages.installStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "archived",
          "type": "Bool"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": "-110209570",
      "method": "messages.uninstallStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-421563528",
      "method": "messages.startBot",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-993483427",
      "method": "messages.getMessagesViews",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector"
        },
        {
          "name": "increment",
          "type": "Bool"
        }
      ],
      "type": "Vector<int>"
    },
    {
      "id": "-1444503762",
      "method": "messages.editChatAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "363051235",
      "method": "messages.migrateChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-1640190800",
      "method": "messages.searchGlobal",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "2016638777",
      "method": "messages.reorderStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "864953444",
      "method": "messages.getDocumentByHash",
      "params": [
        {
          "name": "sha256",
          "type": "bytes"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    {
      "id": "-1080395925",
      "method": "messages.searchGifs",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.FoundGifs"
    },
    {
      "id": "-2084618926",
      "method": "messages.getSavedGifs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.SavedGifs"
    },
    {
      "id": "846868683",
      "method": "messages.saveGif",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1364105629",
      "method": "messages.getInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "geo_point",
          "type": "flags.0?InputGeoPoint"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "messages.BotResults"
    },
    {
      "id": "-346119674",
      "method": "messages.setInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "private",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "results",
          "type": "Vector"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "next_offset",
          "type": "flags.2?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.3?InlineBotSwitchPM"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1318189314",
      "method": "messages.sendInlineBotResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "hide_via",
          "type": "flags.11?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "id",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-39416522",
      "method": "messages.getMessageEditData",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "messages.MessageEditData"
    },
    {
      "id": "-787025122",
      "method": "messages.editMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-2091549254",
      "method": "messages.editInlineBotMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-2130010132",
      "method": "messages.getBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "game",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    {
      "id": "-712043766",
      "method": "messages.setBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-462373635",
      "method": "messages.getPeerDialogs",
      "params": [
        {
          "name": "peers",
          "type": "Vector"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": "-1137057461",
      "method": "messages.saveDraft",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1782549861",
      "method": "messages.getAllDrafts",
      "params": [],
      "type": "Updates"
    },
    {
      "id": "766298703",
      "method": "messages.getFeaturedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": "1527873830",
      "method": "messages.readFeaturedStickers",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1587647177",
      "method": "messages.getRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.RecentStickers"
    },
    {
      "id": "958863608",
      "method": "messages.saveRecentSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1986437075",
      "method": "messages.clearRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1475442322",
      "method": "messages.getArchivedStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "offset_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    {
      "id": "1706608543",
      "method": "messages.getMaskStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": "-866424884",
      "method": "messages.getAttachedStickers",
      "params": [
        {
          "name": "media",
          "type": "InputStickeredMedia"
        }
      ],
      "type": "Vector<StickerSetCovered>"
    },
    {
      "id": "-1896289088",
      "method": "messages.setGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "363700068",
      "method": "messages.setInlineGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-400399203",
      "method": "messages.getGameHighScores",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": "258170395",
      "method": "messages.getInlineGameHighScores",
      "params": [
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": "218777796",
      "method": "messages.getCommonChats",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": "-341307408",
      "method": "messages.getAllChats",
      "params": [
        {
          "name": "except_ids",
          "type": "Vector"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": "852135825",
      "method": "messages.getWebPage",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": "-1489903017",
      "method": "messages.toggleDialogPin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1532089919",
      "method": "messages.reorderPinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-497756594",
      "method": "messages.getPinnedDialogs",
      "params": [],
      "type": "messages.PeerDialogs"
    },
    {
      "id": "-436833542",
      "method": "messages.setBotShippingResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "163765653",
      "method": "messages.setBotPrecheckoutResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1369162417",
      "method": "messages.uploadMedia",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "media",
          "type": "InputMedia"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "-914493408",
      "method": "messages.sendScreenshotNotification",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "567151374",
      "method": "messages.getFavedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FavedStickers"
    },
    {
      "id": "-1174420133",
      "method": "messages.faveSticker",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unfave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1180140658",
      "method": "messages.getUnreadMentions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "251759059",
      "method": "messages.readMentions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": "-1144759543",
      "method": "messages.getRecentLocations",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "546656559",
      "method": "messages.sendMultiMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "multi_media",
          "type": "Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1347929239",
      "method": "messages.uploadEncryptedFile",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "EncryptedFile"
    },
    {
      "id": "-1028140917",
      "method": "messages.searchStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_featured",
          "type": "flags.0?true"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": "486505992",
      "method": "messages.getSplitRanges",
      "params": [],
      "type": "Vector<MessageRange>"
    },
    {
      "id": "-1031349873",
      "method": "messages.markDialogUnread",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "585256482",
      "method": "messages.getDialogUnreadMarks",
      "params": [],
      "type": "Vector<DialogPeer>"
    },
    {
      "id": "2119757468",
      "method": "messages.clearAllDrafts",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-760547348",
      "method": "messages.updatePinnedMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "283795844",
      "method": "messages.sendVote",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1941660731",
      "method": "messages.getPollResults",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1848369232",
      "method": "messages.getOnlines",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "ChatOnlines"
    },
    {
      "id": "-2127811866",
      "method": "messages.getStatsURL",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "params",
          "type": "string"
        }
      ],
      "type": "StatsURL"
    },
    {
      "id": "-554301545",
      "method": "messages.editChatAbout",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "about",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1517917375",
      "method": "messages.editChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "899735650",
      "method": "messages.getEmojiKeywords",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": "352892591",
      "method": "messages.getEmojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": "1318675378",
      "method": "messages.getEmojiKeywordsLanguages",
      "params": [
        {
          "name": "lang_codes",
          "type": "Vector"
        }
      ],
      "type": "Vector<EmojiLanguage>"
    },
    {
      "id": "-709817306",
      "method": "messages.getEmojiURL",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    {
      "id": "-304838614",
      "method": "updates.getState",
      "params": [],
      "type": "updates.State"
    },
    {
      "id": "630429265",
      "method": "updates.getDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_total_limit",
          "type": "flags.0?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": "51854712",
      "method": "updates.getChannelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelMessagesFilter"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": "-256159406",
      "method": "photos.updateProfilePhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "UserProfilePhoto"
    },
    {
      "id": "1328726168",
      "method": "photos.uploadProfilePhoto",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": "-2016444625",
      "method": "photos.deletePhotos",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "Vector<long>"
    },
    {
      "id": "-1848823128",
      "method": "photos.getUserPhotos",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": "-1291540959",
      "method": "upload.saveFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-475607115",
      "method": "upload.getFile",
      "params": [
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": "-562337987",
      "method": "upload.saveBigFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "file_total_parts",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "619086221",
      "method": "upload.getWebFile",
      "params": [
        {
          "name": "location",
          "type": "InputWebFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.WebFile"
    },
    {
      "id": "536919235",
      "method": "upload.getCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": "-1691921240",
      "method": "upload.reuploadCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": "1302676017",
      "method": "upload.getCdnFileHashes",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": "-956147407",
      "method": "upload.getFileHashes",
      "params": [
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "Vector<FileHash>"
    },
    {
      "id": "-990308245",
      "method": "help.getConfig",
      "params": [],
      "type": "Config"
    },
    {
      "id": "531836966",
      "method": "help.getNearestDc",
      "params": [],
      "type": "NearestDc"
    },
    {
      "id": "1378703997",
      "method": "help.getAppUpdate",
      "params": [
        {
          "name": "source",
          "type": "string"
        }
      ],
      "type": "help.AppUpdate"
    },
    {
      "id": "1295590211",
      "method": "help.getInviteText",
      "params": [],
      "type": "help.InviteText"
    },
    {
      "id": "-1663104819",
      "method": "help.getSupport",
      "params": [],
      "type": "help.Support"
    },
    {
      "id": "-1877938321",
      "method": "help.getAppChangelog",
      "params": [
        {
          "name": "prev_app_version",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-333262899",
      "method": "help.setBotUpdatesStatus",
      "params": [
        {
          "name": "pending_updates_count",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1375900482",
      "method": "help.getCdnConfig",
      "params": [],
      "type": "CdnConfig"
    },
    {
      "id": "1036054804",
      "method": "help.getRecentMeUrls",
      "params": [
        {
          "name": "referer",
          "type": "string"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    {
      "id": "1031231713",
      "method": "help.getProxyData",
      "params": [],
      "type": "help.ProxyData"
    },
    {
      "id": "749019089",
      "method": "help.getTermsOfServiceUpdate",
      "params": [],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": "-294455398",
      "method": "help.acceptTermsOfService",
      "params": [
        {
          "name": "id",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "1072547679",
      "method": "help.getDeepLinkInfo",
      "params": [
        {
          "name": "path",
          "type": "string"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": "-1735311088",
      "method": "help.getAppConfig",
      "params": [],
      "type": "JSONValue"
    },
    {
      "id": "1862465352",
      "method": "help.saveAppLog",
      "params": [
        {
          "name": "events",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-966677240",
      "method": "help.getPassportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.PassportConfig"
    },
    {
      "id": "-748624084",
      "method": "help.getSupportName",
      "params": [],
      "type": "help.SupportName"
    },
    {
      "id": "59377875",
      "method": "help.getUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": "1723407216",
      "method": "help.editUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": "-871347913",
      "method": "channels.readHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-2067661490",
      "method": "channels.deleteMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": "-787622117",
      "method": "channels.deleteUserHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": "-32999408",
      "method": "channels.reportSpam",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1383294429",
      "method": "channels.getMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "306054633",
      "method": "channels.getParticipants",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelParticipantsFilter"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": "1416484774",
      "method": "channels.getParticipant",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    {
      "id": "176122811",
      "method": "channels.getChannels",
      "params": [
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": "141781513",
      "method": "channels.getFullChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": "-192332417",
      "method": "channels.createChannel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.0?true"
        },
        {
          "name": "megagroup",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "about",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1895338938",
      "method": "channels.editAdmin",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1450044624",
      "method": "channels.editTitle",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-248621111",
      "method": "channels.editPhoto",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "283557164",
      "method": "channels.checkUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "890549214",
      "method": "channels.updateUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "615851205",
      "method": "channels.joinChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-130635115",
      "method": "channels.leaveChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "429865580",
      "method": "channels.inviteToChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-1072619549",
      "method": "channels.deleteChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-826838685",
      "method": "channels.exportMessageLink",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "grouped",
          "type": "Bool"
        }
      ],
      "type": "ExportedMessageLink"
    },
    {
      "id": "527021574",
      "method": "channels.toggleSignatures",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-1920105769",
      "method": "channels.getAdminedPublicChannels",
      "params": [],
      "type": "messages.Chats"
    },
    {
      "id": "1920559378",
      "method": "channels.editBanned",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "870184064",
      "method": "channels.getAdminLog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "events_filter",
          "type": "flags.0?ChannelAdminLogEventsFilter"
        },
        {
          "name": "admins",
          "type": "flags.1?Vector"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "min_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    {
      "id": "-359881479",
      "method": "channels.setStickers",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-357180360",
      "method": "channels.readMessageContents",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1355375294",
      "method": "channels.deleteHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-356796084",
      "method": "channels.togglePreHistoryHidden",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-2092831552",
      "method": "channels.getLeftChannels",
      "params": [
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": "-1440257555",
      "method": "bots.sendCustomRequest",
      "params": [
        {
          "name": "custom_method",
          "type": "string"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "DataJSON"
    },
    {
      "id": "-434028723",
      "method": "bots.answerWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1712285883",
      "method": "payments.getPaymentForm",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": "-1601001088",
      "method": "payments.getPaymentReceipt",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    {
      "id": "1997180532",
      "method": "payments.validateRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "info",
          "type": "PaymentRequestedInfo"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    {
      "id": "730364339",
      "method": "payments.sendPaymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "requested_info_id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "credentials",
          "type": "InputPaymentCredentials"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": "578650699",
      "method": "payments.getSavedInfo",
      "params": [],
      "type": "payments.SavedInfo"
    },
    {
      "id": "-667062079",
      "method": "payments.clearSavedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "credentials",
          "type": "flags.0?true"
        },
        {
          "name": "info",
          "type": "flags.1?true"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1680314774",
      "method": "stickers.createStickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "stickers",
          "type": "Vector"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": "-143257775",
      "method": "stickers.removeStickerFromSet",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": "-4795190",
      "method": "stickers.changeStickerPosition",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        },
        {
          "name": "position",
          "type": "int"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": "-2041315650",
      "method": "stickers.addStickerToSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "sticker",
          "type": "InputStickerSetItem"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": "1430593449",
      "method": "phone.getCallConfig",
      "params": [],
      "type": "DataJSON"
    },
    {
      "id": "1124046573",
      "method": "phone.requestCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": "1003664544",
      "method": "phone.acceptCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": "788404002",
      "method": "phone.confirmCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_a",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": "399855457",
      "method": "phone.receivedCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-1295269440",
      "method": "phone.discardCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "reason",
          "type": "PhoneCallDiscardReason"
        },
        {
          "name": "connection_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1508562471",
      "method": "phone.setCallRating",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_initiative",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "rating",
          "type": "int"
        },
        {
          "name": "comment",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "662363518",
      "method": "phone.saveCallDebug",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "debug",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    {
      "id": "-219008246",
      "method": "langpack.getLangPack",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": "-269862909",
      "method": "langpack.getStrings",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "keys",
          "type": "Vector"
        }
      ],
      "type": "Vector<LangPackString>"
    },
    {
      "id": "-845657435",
      "method": "langpack.getDifference",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": "1120311183",
      "method": "langpack.getLanguages",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        }
      ],
      "type": "Vector<LangPackLanguage>"
    },
    {
      "id": "1784243458",
      "method": "langpack.getLanguage",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    }
  ],
  "constructors": [
    {
      "id": "85337187",
      "predicate": "resPQ",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "pq",
          "type": "string"
        },
        {
          "name": "server_public_key_fingerprints",
          "type": "Vector"
        }
      ],
      "type": "ResPQ"
    },
    {
      "id": "-2083955988",
      "predicate": "p_q_inner_data",
      "params": [
        {
          "name": "pq",
          "type": "string"
        },
        {
          "name": "p",
          "type": "string"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        }
      ],
      "type": "P_Q_inner_data"
    },
    {
      "id": "-1443537003",
      "predicate": "p_q_inner_data_dc",
      "params": [
        {
          "name": "pq",
          "type": "string"
        },
        {
          "name": "p",
          "type": "string"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        },
        {
          "name": "dc",
          "type": "int"
        }
      ],
      "type": "P_Q_inner_data"
    },
    {
      "id": "1013613780",
      "predicate": "p_q_inner_data_temp",
      "params": [
        {
          "name": "pq",
          "type": "string"
        },
        {
          "name": "p",
          "type": "string"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        },
        {
          "name": "expires_in",
          "type": "int"
        }
      ],
      "type": "P_Q_inner_data"
    },
    {
      "id": "1459478408",
      "predicate": "p_q_inner_data_temp_dc",
      "params": [
        {
          "name": "pq",
          "type": "string"
        },
        {
          "name": "p",
          "type": "string"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        },
        {
          "name": "dc",
          "type": "int"
        },
        {
          "name": "expires_in",
          "type": "int"
        }
      ],
      "type": "P_Q_inner_data"
    },
    {
      "id": "2043348061",
      "predicate": "server_DH_params_fail",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash",
          "type": "int128"
        }
      ],
      "type": "Server_DH_Params"
    },
    {
      "id": "-790100132",
      "predicate": "server_DH_params_ok",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "encrypted_answer",
          "type": "string"
        }
      ],
      "type": "Server_DH_Params"
    },
    {
      "id": "-1249309254",
      "predicate": "server_DH_inner_data",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "dh_prime",
          "type": "string"
        },
        {
          "name": "g_a",
          "type": "string"
        },
        {
          "name": "server_time",
          "type": "int"
        }
      ],
      "type": "Server_DH_inner_data"
    },
    {
      "id": "1715713620",
      "predicate": "client_DH_inner_data",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "retry_id",
          "type": "long"
        },
        {
          "name": "g_b",
          "type": "string"
        }
      ],
      "type": "Client_DH_Inner_Data"
    },
    {
      "id": "1003222836",
      "predicate": "dh_gen_ok",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash1",
          "type": "int128"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    {
      "id": "1188831161",
      "predicate": "dh_gen_retry",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash2",
          "type": "int128"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    {
      "id": "-1499615742",
      "predicate": "dh_gen_fail",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash3",
          "type": "int128"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    {
      "id": "-161422892",
      "predicate": "destroy_auth_key_ok",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    {
      "id": "178201177",
      "predicate": "destroy_auth_key_none",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    {
      "id": "-368010477",
      "predicate": "destroy_auth_key_fail",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    {
      "id": "1658238041",
      "predicate": "msgs_ack",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector"
        }
      ],
      "type": "MsgsAck"
    },
    {
      "id": "-1477445615",
      "predicate": "bad_msg_notification",
      "params": [
        {
          "name": "bad_msg_id",
          "type": "long"
        },
        {
          "name": "bad_msg_seqno",
          "type": "int"
        },
        {
          "name": "error_code",
          "type": "int"
        }
      ],
      "type": "BadMsgNotification"
    },
    {
      "id": "-307542917",
      "predicate": "bad_server_salt",
      "params": [
        {
          "name": "bad_msg_id",
          "type": "long"
        },
        {
          "name": "bad_msg_seqno",
          "type": "int"
        },
        {
          "name": "error_code",
          "type": "int"
        },
        {
          "name": "new_server_salt",
          "type": "long"
        }
      ],
      "type": "BadMsgNotification"
    },
    {
      "id": "-630588590",
      "predicate": "msgs_state_req",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector"
        }
      ],
      "type": "MsgsStateReq"
    },
    {
      "id": "81704317",
      "predicate": "msgs_state_info",
      "params": [
        {
          "name": "req_msg_id",
          "type": "long"
        },
        {
          "name": "info",
          "type": "string"
        }
      ],
      "type": "MsgsStateInfo"
    },
    {
      "id": "-1933520591",
      "predicate": "msgs_all_info",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector"
        },
        {
          "name": "info",
          "type": "string"
        }
      ],
      "type": "MsgsAllInfo"
    },
    {
      "id": "661470918",
      "predicate": "msg_detailed_info",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "answer_msg_id",
          "type": "long"
        },
        {
          "name": "bytes",
          "type": "int"
        },
        {
          "name": "status",
          "type": "int"
        }
      ],
      "type": "MsgDetailedInfo"
    },
    {
      "id": "-2137147681",
      "predicate": "msg_new_detailed_info",
      "params": [
        {
          "name": "answer_msg_id",
          "type": "long"
        },
        {
          "name": "bytes",
          "type": "int"
        },
        {
          "name": "status",
          "type": "int"
        }
      ],
      "type": "MsgDetailedInfo"
    },
    {
      "id": "2105940488",
      "predicate": "msg_resend_req",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector"
        }
      ],
      "type": "MsgResendReq"
    },
    {
      "id": "558156313",
      "predicate": "rpc_error",
      "params": [
        {
          "name": "error_code",
          "type": "int"
        },
        {
          "name": "error_message",
          "type": "string"
        }
      ],
      "type": "RpcError"
    },
    {
      "id": "1579864942",
      "predicate": "rpc_answer_unknown",
      "params": [],
      "type": "RpcDropAnswer"
    },
    {
      "id": "-847714938",
      "predicate": "rpc_answer_dropped_running",
      "params": [],
      "type": "RpcDropAnswer"
    },
    {
      "id": "-1539647305",
      "predicate": "rpc_answer_dropped",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "seq_no",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "int"
        }
      ],
      "type": "RpcDropAnswer"
    },
    {
      "id": "155834844",
      "predicate": "future_salt",
      "params": [
        {
          "name": "valid_since",
          "type": "int"
        },
        {
          "name": "valid_until",
          "type": "int"
        },
        {
          "name": "salt",
          "type": "long"
        }
      ],
      "type": "FutureSalt"
    },
    {
      "id": "-1370486635",
      "predicate": "future_salts",
      "params": [
        {
          "name": "req_msg_id",
          "type": "long"
        },
        {
          "name": "now",
          "type": "int"
        },
        {
          "name": "salts",
          "type": "vector"
        }
      ],
      "type": "FutureSalts"
    },
    {
      "id": "880243653",
      "predicate": "pong",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "ping_id",
          "type": "long"
        }
      ],
      "type": "Pong"
    },
    {
      "id": "-501201412",
      "predicate": "destroy_session_ok",
      "params": [
        {
          "name": "session_id",
          "type": "long"
        }
      ],
      "type": "DestroySessionRes"
    },
    {
      "id": "1658015945",
      "predicate": "destroy_session_none",
      "params": [
        {
          "name": "session_id",
          "type": "long"
        }
      ],
      "type": "DestroySessionRes"
    },
    {
      "id": "-1631450872",
      "predicate": "new_session_created",
      "params": [
        {
          "name": "first_msg_id",
          "type": "long"
        },
        {
          "name": "unique_id",
          "type": "long"
        },
        {
          "name": "server_salt",
          "type": "long"
        }
      ],
      "type": "NewSession"
    },
    {
      "id": "-1835453025",
      "predicate": "http_wait",
      "params": [
        {
          "name": "max_delay",
          "type": "int"
        },
        {
          "name": "wait_after",
          "type": "int"
        },
        {
          "name": "max_wait",
          "type": "int"
        }
      ],
      "type": "HttpWait"
    },
    {
      "id": "-734810765",
      "predicate": "ipPort",
      "params": [
        {
          "name": "ipv4",
          "type": "int"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "IpPort"
    },
    {
      "id": "932718150",
      "predicate": "ipPortSecret",
      "params": [
        {
          "name": "ipv4",
          "type": "int"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "IpPort"
    },
    {
      "id": "1182381663",
      "predicate": "accessPointRule",
      "params": [
        {
          "name": "phone_prefix_rules",
          "type": "string"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "ips",
          "type": "vector"
        }
      ],
      "type": "AccessPointRule"
    },
    {
      "id": "1515793004",
      "predicate": "help.configSimple",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "rules",
          "type": "vector"
        }
      ],
      "type": "help.ConfigSimple"
    },
    {
      "id": "-1132882121",
      "predicate": "boolFalse",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "-1720552011",
      "predicate": "boolTrue",
      "params": [],
      "type": "Bool"
    },
    {
      "id": "1072550713",
      "predicate": "true",
      "params": [],
      "type": "True"
    },
    {
      "id": "481674261",
      "predicate": "vector",
      "params": [
        {
          "name": "t",
          "type": "Type"
        }
      ],
      "type": "Vector t"
    },
    {
      "id": "-994444869",
      "predicate": "error",
      "params": [
        {
          "name": "code",
          "type": "int"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "Error"
    },
    {
      "id": "1450380236",
      "predicate": "null",
      "params": [],
      "type": "Null"
    },
    {
      "id": "2134579434",
      "predicate": "inputPeerEmpty",
      "params": [],
      "type": "InputPeer"
    },
    {
      "id": "2107670217",
      "predicate": "inputPeerSelf",
      "params": [],
      "type": "InputPeer"
    },
    {
      "id": "396093539",
      "predicate": "inputPeerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": "2072935910",
      "predicate": "inputPeerUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": "548253432",
      "predicate": "inputPeerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    {
      "id": "-1182234929",
      "predicate": "inputUserEmpty",
      "params": [],
      "type": "InputUser"
    },
    {
      "id": "-138301121",
      "predicate": "inputUserSelf",
      "params": [],
      "type": "InputUser"
    },
    {
      "id": "-668391402",
      "predicate": "inputUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputUser"
    },
    {
      "id": "-208488460",
      "predicate": "inputPhoneContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "InputContact"
    },
    {
      "id": "-181407105",
      "predicate": "inputFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    {
      "id": "-95482955",
      "predicate": "inputFileBig",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    {
      "id": "-1771768449",
      "predicate": "inputMediaEmpty",
      "params": [],
      "type": "InputMedia"
    },
    {
      "id": "505969924",
      "predicate": "inputMediaUploadedPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-1279654347",
      "predicate": "inputMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "InputPhoto"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-104578748",
      "predicate": "inputMediaGeoPoint",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-122978821",
      "predicate": "inputMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "1530447553",
      "predicate": "inputMediaUploadedDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "nosound_video",
          "type": "flags.3?true"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "thumb",
          "type": "flags.2?InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "598418386",
      "predicate": "inputMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-1052959727",
      "predicate": "inputMediaVenue",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "1212395773",
      "predicate": "inputMediaGifExternal",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-440664550",
      "predicate": "inputMediaPhotoExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-78455655",
      "predicate": "inputMediaDocumentExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-750828557",
      "predicate": "inputMediaGame",
      "params": [
        {
          "name": "id",
          "type": "InputGame"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-186607933",
      "predicate": "inputMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?InputWebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "provider_data",
          "type": "DataJSON"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "-833715459",
      "predicate": "inputMediaGeoLive",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stopped",
          "type": "flags.0?true"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "112424539",
      "predicate": "inputMediaPoll",
      "params": [
        {
          "name": "poll",
          "type": "Poll"
        }
      ],
      "type": "InputMedia"
    },
    {
      "id": "480546647",
      "predicate": "inputChatPhotoEmpty",
      "params": [],
      "type": "InputChatPhoto"
    },
    {
      "id": "-1837345356",
      "predicate": "inputChatUploadedPhoto",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        }
      ],
      "type": "InputChatPhoto"
    },
    {
      "id": "-1991004873",
      "predicate": "inputChatPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputChatPhoto"
    },
    {
      "id": "-457104426",
      "predicate": "inputGeoPointEmpty",
      "params": [],
      "type": "InputGeoPoint"
    },
    {
      "id": "-206066487",
      "predicate": "inputGeoPoint",
      "params": [
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "long",
          "type": "double"
        }
      ],
      "type": "InputGeoPoint"
    },
    {
      "id": "483901197",
      "predicate": "inputPhotoEmpty",
      "params": [],
      "type": "InputPhoto"
    },
    {
      "id": "1001634122",
      "predicate": "inputPhoto",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputPhoto"
    },
    {
      "id": "-539317279",
      "predicate": "inputFileLocation",
      "params": [
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": "-182231723",
      "predicate": "inputEncryptedFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": "-1160743548",
      "predicate": "inputDocumentFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": "-876089816",
      "predicate": "inputSecureFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": "700340377",
      "predicate": "inputTakeoutFileLocation",
      "params": [],
      "type": "InputFileLocation"
    },
    {
      "id": "1075322878",
      "predicate": "inputPhotoFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": "668375447",
      "predicate": "inputPeerPhotoFileLocation",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "big",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": "230353641",
      "predicate": "inputStickerSetThumb",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        }
      ],
      "type": "InputFileLocation"
    },
    {
      "id": "-1649296275",
      "predicate": "peerUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    {
      "id": "-1160714821",
      "predicate": "peerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    {
      "id": "-1109531342",
      "predicate": "peerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    {
      "id": "-1432995067",
      "predicate": "storage.fileUnknown",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "1086091090",
      "predicate": "storage.filePartial",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "8322574",
      "predicate": "storage.fileJpeg",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "-891180321",
      "predicate": "storage.fileGif",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "172975040",
      "predicate": "storage.filePng",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "-1373745011",
      "predicate": "storage.filePdf",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "1384777335",
      "predicate": "storage.fileMp3",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "1258941372",
      "predicate": "storage.fileMov",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "-1278304028",
      "predicate": "storage.fileMp4",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "276907596",
      "predicate": "storage.fileWebp",
      "params": [],
      "type": "storage.FileType"
    },
    {
      "id": "537022650",
      "predicate": "userEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "User"
    },
    {
      "id": "773059779",
      "predicate": "user",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "self",
          "type": "flags.10?true"
        },
        {
          "name": "contact",
          "type": "flags.11?true"
        },
        {
          "name": "mutual_contact",
          "type": "flags.12?true"
        },
        {
          "name": "deleted",
          "type": "flags.13?true"
        },
        {
          "name": "bot",
          "type": "flags.14?true"
        },
        {
          "name": "bot_chat_history",
          "type": "flags.15?true"
        },
        {
          "name": "bot_nochats",
          "type": "flags.16?true"
        },
        {
          "name": "verified",
          "type": "flags.17?true"
        },
        {
          "name": "restricted",
          "type": "flags.18?true"
        },
        {
          "name": "min",
          "type": "flags.20?true"
        },
        {
          "name": "bot_inline_geo",
          "type": "flags.21?true"
        },
        {
          "name": "support",
          "type": "flags.23?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "flags.0?long"
        },
        {
          "name": "first_name",
          "type": "flags.1?string"
        },
        {
          "name": "last_name",
          "type": "flags.2?string"
        },
        {
          "name": "username",
          "type": "flags.3?string"
        },
        {
          "name": "phone",
          "type": "flags.4?string"
        },
        {
          "name": "photo",
          "type": "flags.5?UserProfilePhoto"
        },
        {
          "name": "status",
          "type": "flags.6?UserStatus"
        },
        {
          "name": "bot_info_version",
          "type": "flags.14?int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.18?string"
        },
        {
          "name": "bot_inline_placeholder",
          "type": "flags.19?string"
        },
        {
          "name": "lang_code",
          "type": "flags.22?string"
        }
      ],
      "type": "User"
    },
    {
      "id": "1326562017",
      "predicate": "userProfilePhotoEmpty",
      "params": [],
      "type": "UserProfilePhoto"
    },
    {
      "id": "-321430132",
      "predicate": "userProfilePhoto",
      "params": [
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "photo_small",
          "type": "FileLocation"
        },
        {
          "name": "photo_big",
          "type": "FileLocation"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "UserProfilePhoto"
    },
    {
      "id": "164646985",
      "predicate": "userStatusEmpty",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": "-306628279",
      "predicate": "userStatusOnline",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": "9203775",
      "predicate": "userStatusOffline",
      "params": [
        {
          "name": "was_online",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    {
      "id": "-496024847",
      "predicate": "userStatusRecently",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": "129960444",
      "predicate": "userStatusLastWeek",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": "2011940674",
      "predicate": "userStatusLastMonth",
      "params": [],
      "type": "UserStatus"
    },
    {
      "id": "-1683826688",
      "predicate": "chatEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Chat"
    },
    {
      "id": "1004149726",
      "predicate": "chat",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "kicked",
          "type": "flags.1?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "deactivated",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "migrated_to",
          "type": "flags.6?InputChannel"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        }
      ],
      "type": "Chat"
    },
    {
      "id": "120753115",
      "predicate": "chatForbidden",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Chat"
    },
    {
      "id": "1307772980",
      "predicate": "channel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "verified",
          "type": "flags.7?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "restricted",
          "type": "flags.9?true"
        },
        {
          "name": "signatures",
          "type": "flags.11?true"
        },
        {
          "name": "min",
          "type": "flags.12?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "flags.13?long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "username",
          "type": "flags.6?string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.9?string"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "banned_rights",
          "type": "flags.15?ChatBannedRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        },
        {
          "name": "participants_count",
          "type": "flags.17?int"
        }
      ],
      "type": "Chat"
    },
    {
      "id": "681420594",
      "predicate": "channelForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "until_date",
          "type": "flags.16?int"
        }
      ],
      "type": "Chat"
    },
    {
      "id": "581055962",
      "predicate": "chatFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_set_username",
          "type": "flags.7?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants",
          "type": "ChatParticipants"
        },
        {
          "name": "chat_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "flags.3?Vector"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        }
      ],
      "type": "ChatFull"
    },
    {
      "id": "478652186",
      "predicate": "channelFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_view_participants",
          "type": "flags.3?true"
        },
        {
          "name": "can_set_username",
          "type": "flags.6?true"
        },
        {
          "name": "can_set_stickers",
          "type": "flags.7?true"
        },
        {
          "name": "hidden_prehistory",
          "type": "flags.10?true"
        },
        {
          "name": "can_view_stats",
          "type": "flags.12?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants_count",
          "type": "flags.0?int"
        },
        {
          "name": "admins_count",
          "type": "flags.1?int"
        },
        {
          "name": "kicked_count",
          "type": "flags.2?int"
        },
        {
          "name": "banned_count",
          "type": "flags.2?int"
        },
        {
          "name": "online_count",
          "type": "flags.13?int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "chat_photo",
          "type": "Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "Vector"
        },
        {
          "name": "migrated_from_chat_id",
          "type": "flags.4?int"
        },
        {
          "name": "migrated_from_max_id",
          "type": "flags.4?int"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.5?int"
        },
        {
          "name": "stickerset",
          "type": "flags.8?StickerSet"
        },
        {
          "name": "available_min_id",
          "type": "flags.9?int"
        }
      ],
      "type": "ChatFull"
    },
    {
      "id": "-925415106",
      "predicate": "chatParticipant",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": "-636267638",
      "predicate": "chatParticipantCreator",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": "-489233354",
      "predicate": "chatParticipantAdmin",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    {
      "id": "-57668565",
      "predicate": "chatParticipantsForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "self_participant",
          "type": "flags.0?ChatParticipant"
        }
      ],
      "type": "ChatParticipants"
    },
    {
      "id": "1061556205",
      "predicate": "chatParticipants",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "ChatParticipants"
    },
    {
      "id": "935395612",
      "predicate": "chatPhotoEmpty",
      "params": [],
      "type": "ChatPhoto"
    },
    {
      "id": "1197267925",
      "predicate": "chatPhoto",
      "params": [
        {
          "name": "photo_small",
          "type": "FileLocation"
        },
        {
          "name": "photo_big",
          "type": "FileLocation"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "ChatPhoto"
    },
    {
      "id": "-2082087340",
      "predicate": "messageEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Message"
    },
    {
      "id": "1157215293",
      "predicate": "message",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "from_scheduled",
          "type": "flags.18?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?int"
        },
        {
          "name": "to_id",
          "type": "Peer"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.6?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector"
        },
        {
          "name": "views",
          "type": "flags.10?int"
        },
        {
          "name": "edit_date",
          "type": "flags.15?int"
        },
        {
          "name": "post_author",
          "type": "flags.16?string"
        },
        {
          "name": "grouped_id",
          "type": "flags.17?long"
        }
      ],
      "type": "Message"
    },
    {
      "id": "-1642487306",
      "predicate": "messageService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?int"
        },
        {
          "name": "to_id",
          "type": "Peer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "action",
          "type": "MessageAction"
        }
      ],
      "type": "Message"
    },
    {
      "id": "1038967584",
      "predicate": "messageMediaEmpty",
      "params": [],
      "type": "MessageMedia"
    },
    {
      "id": "1766936791",
      "predicate": "messageMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "1457575028",
      "predicate": "messageMediaGeo",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "-873313984",
      "predicate": "messageMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "-1618676578",
      "predicate": "messageMediaUnsupported",
      "params": [],
      "type": "MessageMedia"
    },
    {
      "id": "-1666158377",
      "predicate": "messageMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "-1557277184",
      "predicate": "messageMediaWebPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "784356159",
      "predicate": "messageMediaVenue",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "-38694904",
      "predicate": "messageMediaGame",
      "params": [
        {
          "name": "game",
          "type": "Game"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "-2074799289",
      "predicate": "messageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.1?true"
        },
        {
          "name": "test",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?WebDocument"
        },
        {
          "name": "receipt_msg_id",
          "type": "flags.2?int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "2084316681",
      "predicate": "messageMediaGeoLive",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "1272375192",
      "predicate": "messageMediaPoll",
      "params": [
        {
          "name": "poll",
          "type": "Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "MessageMedia"
    },
    {
      "id": "-1230047312",
      "predicate": "messageActionEmpty",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": "-1503425638",
      "predicate": "messageActionChatCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1247687078",
      "predicate": "messageActionChatEditTitle",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "2144015272",
      "predicate": "messageActionChatEditPhoto",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1780220945",
      "predicate": "messageActionChatDeletePhoto",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": "1217033015",
      "predicate": "messageActionChatAddUser",
      "params": [
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1297179892",
      "predicate": "messageActionChatDeleteUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-123931160",
      "predicate": "messageActionChatJoinedByLink",
      "params": [
        {
          "name": "inviter_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1781355374",
      "predicate": "messageActionChannelCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "1371385889",
      "predicate": "messageActionChatMigrateTo",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1336546578",
      "predicate": "messageActionChannelMigrateFrom",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1799538451",
      "predicate": "messageActionPinMessage",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": "-1615153660",
      "predicate": "messageActionHistoryClear",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": "-1834538890",
      "predicate": "messageActionGameScore",
      "params": [
        {
          "name": "game_id",
          "type": "long"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1892568281",
      "predicate": "messageActionPaymentSentMe",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "charge",
          "type": "PaymentCharge"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "1080663248",
      "predicate": "messageActionPaymentSent",
      "params": [
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-2132731265",
      "predicate": "messageActionPhoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.2?true"
        },
        {
          "name": "call_id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "1200788123",
      "predicate": "messageActionScreenshotTaken",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": "-85549226",
      "predicate": "messageActionCustomAction",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-1410748418",
      "predicate": "messageActionBotAllowed",
      "params": [
        {
          "name": "domain",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "455635795",
      "predicate": "messageActionSecureValuesSentMe",
      "params": [
        {
          "name": "values",
          "type": "Vector"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-648257196",
      "predicate": "messageActionSecureValuesSent",
      "params": [
        {
          "name": "types",
          "type": "Vector"
        }
      ],
      "type": "MessageAction"
    },
    {
      "id": "-202219658",
      "predicate": "messageActionContactSignUp",
      "params": [],
      "type": "MessageAction"
    },
    {
      "id": "-455150117",
      "predicate": "dialog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "unread_mark",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "unread_mentions_count",
          "type": "int"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        },
        {
          "name": "draft",
          "type": "flags.1?DraftMessage"
        }
      ],
      "type": "Dialog"
    },
    {
      "id": "590459437",
      "predicate": "photoEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Photo"
    },
    {
      "id": "-797637467",
      "predicate": "photo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_stickers",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "sizes",
          "type": "Vector"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "Photo"
    },
    {
      "id": "236446268",
      "predicate": "photoSizeEmpty",
      "params": [
        {
          "name": "type",
          "type": "string"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": "2009052699",
      "predicate": "photoSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "location",
          "type": "FileLocation"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "size",
          "type": "int"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": "-374917894",
      "predicate": "photoCachedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "location",
          "type": "FileLocation"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": "-525288402",
      "predicate": "photoStrippedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    {
      "id": "286776671",
      "predicate": "geoPointEmpty",
      "params": [],
      "type": "GeoPoint"
    },
    {
      "id": "43446532",
      "predicate": "geoPoint",
      "params": [
        {
          "name": "long",
          "type": "double"
        },
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "GeoPoint"
    },
    {
      "id": "-2128698738",
      "predicate": "auth.checkedPhone",
      "params": [
        {
          "name": "phone_registered",
          "type": "Bool"
        }
      ],
      "type": "auth.CheckedPhone"
    },
    {
      "id": "955951967",
      "predicate": "auth.sentCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_registered",
          "type": "flags.0?true"
        },
        {
          "name": "type",
          "type": "auth.SentCodeType"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "next_type",
          "type": "flags.1?auth.CodeType"
        },
        {
          "name": "timeout",
          "type": "flags.2?int"
        },
        {
          "name": "terms_of_service",
          "type": "flags.3?help.TermsOfService"
        }
      ],
      "type": "auth.SentCode"
    },
    {
      "id": "-855308010",
      "predicate": "auth.authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "auth.Authorization"
    },
    {
      "id": "-543777747",
      "predicate": "auth.exportedAuthorization",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    {
      "id": "-1195615476",
      "predicate": "inputNotifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputNotifyPeer"
    },
    {
      "id": "423314455",
      "predicate": "inputNotifyUsers",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": "1251338318",
      "predicate": "inputNotifyChats",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": "-1311015810",
      "predicate": "inputNotifyBroadcasts",
      "params": [],
      "type": "InputNotifyPeer"
    },
    {
      "id": "-1673717362",
      "predicate": "inputPeerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "sound",
          "type": "flags.3?string"
        }
      ],
      "type": "InputPeerNotifySettings"
    },
    {
      "id": "-1353671392",
      "predicate": "peerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "sound",
          "type": "flags.3?string"
        }
      ],
      "type": "PeerNotifySettings"
    },
    {
      "id": "-2122045747",
      "predicate": "peerSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "report_spam",
          "type": "flags.0?true"
        }
      ],
      "type": "PeerSettings"
    },
    {
      "id": "-1539849235",
      "predicate": "wallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "pattern",
          "type": "flags.3?true"
        },
        {
          "name": "dark",
          "type": "flags.4?true"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "document",
          "type": "Document"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    {
      "id": "1490799288",
      "predicate": "inputReportReasonSpam",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": "505595789",
      "predicate": "inputReportReasonViolence",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": "777640226",
      "predicate": "inputReportReasonPornography",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": "-1376497949",
      "predicate": "inputReportReasonChildAbuse",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": "-512463606",
      "predicate": "inputReportReasonOther",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "ReportReason"
    },
    {
      "id": "-1685456582",
      "predicate": "inputReportReasonCopyright",
      "params": [],
      "type": "ReportReason"
    },
    {
      "id": "-1901811583",
      "predicate": "userFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "phone_calls_available",
          "type": "flags.4?true"
        },
        {
          "name": "phone_calls_private",
          "type": "flags.5?true"
        },
        {
          "name": "can_pin_message",
          "type": "flags.7?true"
        },
        {
          "name": "user",
          "type": "User"
        },
        {
          "name": "about",
          "type": "flags.1?string"
        },
        {
          "name": "link",
          "type": "contacts.Link"
        },
        {
          "name": "profile_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "bot_info",
          "type": "flags.3?BotInfo"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        },
        {
          "name": "common_chats_count",
          "type": "int"
        }
      ],
      "type": "UserFull"
    },
    {
      "id": "-116274796",
      "predicate": "contact",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "mutual",
          "type": "Bool"
        }
      ],
      "type": "Contact"
    },
    {
      "id": "-805141448",
      "predicate": "importedContact",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "client_id",
          "type": "long"
        }
      ],
      "type": "ImportedContact"
    },
    {
      "id": "1444661369",
      "predicate": "contactBlocked",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ContactBlocked"
    },
    {
      "id": "-748155807",
      "predicate": "contactStatus",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "ContactStatus"
    },
    {
      "id": "986597452",
      "predicate": "contacts.link",
      "params": [
        {
          "name": "my_link",
          "type": "ContactLink"
        },
        {
          "name": "foreign_link",
          "type": "ContactLink"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "contacts.Link"
    },
    {
      "id": "-1219778094",
      "predicate": "contacts.contactsNotModified",
      "params": [],
      "type": "contacts.Contacts"
    },
    {
      "id": "-353862078",
      "predicate": "contacts.contacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector"
        },
        {
          "name": "saved_count",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "contacts.Contacts"
    },
    {
      "id": "2010127419",
      "predicate": "contacts.importedContacts",
      "params": [
        {
          "name": "imported",
          "type": "Vector"
        },
        {
          "name": "popular_invites",
          "type": "Vector"
        },
        {
          "name": "retry_contacts",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    {
      "id": "471043349",
      "predicate": "contacts.blocked",
      "params": [
        {
          "name": "blocked",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": "-1878523231",
      "predicate": "contacts.blockedSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "blocked",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "contacts.Blocked"
    },
    {
      "id": "364538944",
      "predicate": "messages.dialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector"
        },
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": "1910543603",
      "predicate": "messages.dialogsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "dialogs",
          "type": "Vector"
        },
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": "-253500010",
      "predicate": "messages.dialogsNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Dialogs"
    },
    {
      "id": "-1938715001",
      "predicate": "messages.messages",
      "params": [
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "-1497072982",
      "predicate": "messages.messagesSlice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "-1725551049",
      "predicate": "messages.channelMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "1951620897",
      "predicate": "messages.messagesNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    {
      "id": "1694474197",
      "predicate": "messages.chats",
      "params": [
        {
          "name": "chats",
          "type": "Vector"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": "-1663561404",
      "predicate": "messages.chatsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "chats",
          "type": "Vector"
        }
      ],
      "type": "messages.Chats"
    },
    {
      "id": "-438840932",
      "predicate": "messages.chatFull",
      "params": [
        {
          "name": "full_chat",
          "type": "ChatFull"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.ChatFull"
    },
    {
      "id": "-1269012015",
      "predicate": "messages.affectedHistory",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    {
      "id": "1474492012",
      "predicate": "inputMessagesFilterEmpty",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-1777752804",
      "predicate": "inputMessagesFilterPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-1614803355",
      "predicate": "inputMessagesFilterVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "1458172132",
      "predicate": "inputMessagesFilterPhotoVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-1629621880",
      "predicate": "inputMessagesFilterDocument",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "2129714567",
      "predicate": "inputMessagesFilterUrl",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-3644025",
      "predicate": "inputMessagesFilterGif",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "1358283666",
      "predicate": "inputMessagesFilterVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "928101534",
      "predicate": "inputMessagesFilterMusic",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "975236280",
      "predicate": "inputMessagesFilterChatPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-2134272152",
      "predicate": "inputMessagesFilterPhoneCalls",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "missed",
          "type": "flags.0?true"
        }
      ],
      "type": "MessagesFilter"
    },
    {
      "id": "2054952868",
      "predicate": "inputMessagesFilterRoundVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-1253451181",
      "predicate": "inputMessagesFilterRoundVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-1040652646",
      "predicate": "inputMessagesFilterMyMentions",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-419271411",
      "predicate": "inputMessagesFilterGeo",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "-530392189",
      "predicate": "inputMessagesFilterContacts",
      "params": [],
      "type": "MessagesFilter"
    },
    {
      "id": "522914557",
      "predicate": "updateNewMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1318109142",
      "predicate": "updateMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1576161051",
      "predicate": "updateDeleteMessages",
      "params": [
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1548249383",
      "predicate": "updateUserTyping",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1704596961",
      "predicate": "updateChatUserTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    {
      "id": "125178264",
      "predicate": "updateChatParticipants",
      "params": [
        {
          "name": "participants",
          "type": "ChatParticipants"
        }
      ],
      "type": "Update"
    },
    {
      "id": "469489699",
      "predicate": "updateUserStatus",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1489818765",
      "predicate": "updateUserName",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1791935732",
      "predicate": "updateUserPhoto",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "photo",
          "type": "UserProfilePhoto"
        },
        {
          "name": "previous",
          "type": "Bool"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1657903163",
      "predicate": "updateContactLink",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "my_link",
          "type": "ContactLink"
        },
        {
          "name": "foreign_link",
          "type": "ContactLink"
        }
      ],
      "type": "Update"
    },
    {
      "id": "314359194",
      "predicate": "updateNewEncryptedMessage",
      "params": [
        {
          "name": "message",
          "type": "EncryptedMessage"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "386986326",
      "predicate": "updateEncryptedChatTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1264392051",
      "predicate": "updateEncryption",
      "params": [
        {
          "name": "chat",
          "type": "EncryptedChat"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "956179895",
      "predicate": "updateEncryptedMessagesRead",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-364179876",
      "predicate": "updateChatParticipantAdd",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1851755554",
      "predicate": "updateChatParticipantDelete",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1906403213",
      "predicate": "updateDcOptions",
      "params": [
        {
          "name": "dc_options",
          "type": "Vector"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-2131957734",
      "predicate": "updateUserBlocked",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "blocked",
          "type": "Bool"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1094555409",
      "predicate": "updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "NotifyPeer"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-337352679",
      "predicate": "updateServiceNotification",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "inbox_date",
          "type": "flags.1?int"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "MessageMedia"
        },
        {
          "name": "entities",
          "type": "Vector"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-298113238",
      "predicate": "updatePrivacy",
      "params": [
        {
          "name": "key",
          "type": "PrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector"
        }
      ],
      "type": "Update"
    },
    {
      "id": "314130811",
      "predicate": "updateUserPhone",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1721631396",
      "predicate": "updateReadHistoryInbox",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "791617983",
      "predicate": "updateReadHistoryOutbox",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "2139689491",
      "predicate": "updateWebPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1757493555",
      "predicate": "updateReadMessagesContents",
      "params": [
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-352032773",
      "predicate": "updateChannelTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1227598250",
      "predicate": "updateChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1656358105",
      "predicate": "updateNewChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1108669311",
      "predicate": "updateReadChannelInbox",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1015733815",
      "predicate": "updateDeleteChannelMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1734268085",
      "predicate": "updateChannelMessageViews",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1232070311",
      "predicate": "updateChatParticipantAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1753886890",
      "predicate": "updateNewStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "messages.StickerSet"
        }
      ],
      "type": "Update"
    },
    {
      "id": "196268545",
      "predicate": "updateStickerSetsOrder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1135492588",
      "predicate": "updateStickerSets",
      "params": [],
      "type": "Update"
    },
    {
      "id": "-1821035490",
      "predicate": "updateSavedGifs",
      "params": [],
      "type": "Update"
    },
    {
      "id": "1417832080",
      "predicate": "updateBotInlineQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": "239663460",
      "predicate": "updateBotInlineSend",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "msg_id",
          "type": "flags.1?InputBotInlineMessageID"
        }
      ],
      "type": "Update"
    },
    {
      "id": "457133559",
      "predicate": "updateEditChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1738988427",
      "predicate": "updateChannelPinnedMessage",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-415938591",
      "predicate": "updateBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-469536605",
      "predicate": "updateEditMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-103646630",
      "predicate": "updateInlineBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "msg_id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    {
      "id": "634833351",
      "predicate": "updateReadChannelOutbox",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-299124375",
      "predicate": "updateDraftMessage",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "draft",
          "type": "DraftMessage"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1461528386",
      "predicate": "updateReadFeaturedStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": "-1706939360",
      "predicate": "updateRecentStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": "-1574314746",
      "predicate": "updateConfig",
      "params": [],
      "type": "Update"
    },
    {
      "id": "861169551",
      "predicate": "updatePtsChanged",
      "params": [],
      "type": "Update"
    },
    {
      "id": "1081547008",
      "predicate": "updateChannelWebPage",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "433225532",
      "predicate": "updateDialogPinned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-364071333",
      "predicate": "updatePinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "order",
          "type": "flags.0?Vector"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-2095595325",
      "predicate": "updateBotWebhookJSON",
      "params": [
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1684914010",
      "predicate": "updateBotWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        },
        {
          "name": "timeout",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-523384512",
      "predicate": "updateBotShippingQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "shipping_address",
          "type": "PostAddress"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1563376297",
      "predicate": "updateBotPrecheckoutQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1425052898",
      "predicate": "updatePhoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1180041828",
      "predicate": "updateLangPackTooLong",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1442983757",
      "predicate": "updateLangPack",
      "params": [
        {
          "name": "difference",
          "type": "LangPackDifference"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-451831443",
      "predicate": "updateFavedStickers",
      "params": [],
      "type": "Update"
    },
    {
      "id": "-1987495099",
      "predicate": "updateChannelReadMessagesContents",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1887741886",
      "predicate": "updateContactsReset",
      "params": [],
      "type": "Update"
    },
    {
      "id": "1893427255",
      "predicate": "updateChannelAvailableMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "available_min_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-513517117",
      "predicate": "updateDialogUnreadMark",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1279515160",
      "predicate": "updateUserPinnedMessage",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-519195831",
      "predicate": "updateChatPinnedMessage",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1398708869",
      "predicate": "updateMessagePoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "poll_id",
          "type": "long"
        },
        {
          "name": "poll",
          "type": "flags.0?Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "Update"
    },
    {
      "id": "1421875280",
      "predicate": "updateChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "default_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    {
      "id": "-1519637954",
      "predicate": "updates.state",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        }
      ],
      "type": "updates.State"
    },
    {
      "id": "1567990072",
      "predicate": "updates.differenceEmpty",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": "16030880",
      "predicate": "updates.difference",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector"
        },
        {
          "name": "other_updates",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": "-1459938943",
      "predicate": "updates.differenceSlice",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector"
        },
        {
          "name": "other_updates",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        },
        {
          "name": "intermediate_state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": "1258196845",
      "predicate": "updates.differenceTooLong",
      "params": [
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    {
      "id": "-484987010",
      "predicate": "updatesTooLong",
      "params": [],
      "type": "Updates"
    },
    {
      "id": "-1857044719",
      "predicate": "updateShortMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "377562760",
      "predicate": "updateShortChatMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "int"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "2027216577",
      "predicate": "updateShort",
      "params": [
        {
          "name": "update",
          "type": "Update"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1918567619",
      "predicate": "updatesCombined",
      "params": [
        {
          "name": "updates",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq_start",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "1957577280",
      "predicate": "updates",
      "params": [
        {
          "name": "updates",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "301019932",
      "predicate": "updateShortSentMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector"
        }
      ],
      "type": "Updates"
    },
    {
      "id": "-1916114267",
      "predicate": "photos.photos",
      "params": [
        {
          "name": "photos",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": "352657236",
      "predicate": "photos.photosSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "photos",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "photos.Photos"
    },
    {
      "id": "539045032",
      "predicate": "photos.photo",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "photos.Photo"
    },
    {
      "id": "157948117",
      "predicate": "upload.file",
      "params": [
        {
          "name": "type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": "-242427324",
      "predicate": "upload.fileCdnRedirect",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "encryption_key",
          "type": "bytes"
        },
        {
          "name": "encryption_iv",
          "type": "bytes"
        },
        {
          "name": "file_hashes",
          "type": "Vector"
        }
      ],
      "type": "upload.File"
    },
    {
      "id": "414687501",
      "predicate": "dcOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "ipv6",
          "type": "flags.0?true"
        },
        {
          "name": "media_only",
          "type": "flags.1?true"
        },
        {
          "name": "tcpo_only",
          "type": "flags.2?true"
        },
        {
          "name": "cdn",
          "type": "flags.3?true"
        },
        {
          "name": "static",
          "type": "flags.4?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "ip_address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "flags.10?bytes"
        }
      ],
      "type": "DcOption"
    },
    {
      "id": "-422959626",
      "predicate": "config",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phonecalls_enabled",
          "type": "flags.1?true"
        },
        {
          "name": "default_p2p_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "preload_featured_stickers",
          "type": "flags.4?true"
        },
        {
          "name": "ignore_phone_entities",
          "type": "flags.5?true"
        },
        {
          "name": "revoke_pm_inbox",
          "type": "flags.6?true"
        },
        {
          "name": "blocked_mode",
          "type": "flags.8?true"
        },
        {
          "name": "pfs_enabled",
          "type": "flags.13?true"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "test_mode",
          "type": "Bool"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "dc_options",
          "type": "Vector"
        },
        {
          "name": "dc_txt_domain_name",
          "type": "string"
        },
        {
          "name": "chat_size_max",
          "type": "int"
        },
        {
          "name": "megagroup_size_max",
          "type": "int"
        },
        {
          "name": "forwarded_count_max",
          "type": "int"
        },
        {
          "name": "online_update_period_ms",
          "type": "int"
        },
        {
          "name": "offline_blur_timeout_ms",
          "type": "int"
        },
        {
          "name": "offline_idle_timeout_ms",
          "type": "int"
        },
        {
          "name": "online_cloud_timeout_ms",
          "type": "int"
        },
        {
          "name": "notify_cloud_delay_ms",
          "type": "int"
        },
        {
          "name": "notify_default_delay_ms",
          "type": "int"
        },
        {
          "name": "push_chat_period_ms",
          "type": "int"
        },
        {
          "name": "push_chat_limit",
          "type": "int"
        },
        {
          "name": "saved_gifs_limit",
          "type": "int"
        },
        {
          "name": "edit_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_pm_time_limit",
          "type": "int"
        },
        {
          "name": "rating_e_decay",
          "type": "int"
        },
        {
          "name": "stickers_recent_limit",
          "type": "int"
        },
        {
          "name": "stickers_faved_limit",
          "type": "int"
        },
        {
          "name": "channels_read_media_period",
          "type": "int"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "pinned_dialogs_count_max",
          "type": "int"
        },
        {
          "name": "call_receive_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_ring_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_connect_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_packet_timeout_ms",
          "type": "int"
        },
        {
          "name": "me_url_prefix",
          "type": "string"
        },
        {
          "name": "autoupdate_url_prefix",
          "type": "flags.7?string"
        },
        {
          "name": "gif_search_username",
          "type": "flags.9?string"
        },
        {
          "name": "venue_search_username",
          "type": "flags.10?string"
        },
        {
          "name": "img_search_username",
          "type": "flags.11?string"
        },
        {
          "name": "static_maps_provider",
          "type": "flags.12?string"
        },
        {
          "name": "caption_length_max",
          "type": "int"
        },
        {
          "name": "message_length_max",
          "type": "int"
        },
        {
          "name": "webfile_dc_id",
          "type": "int"
        },
        {
          "name": "suggested_lang_code",
          "type": "flags.2?string"
        },
        {
          "name": "lang_pack_version",
          "type": "flags.2?int"
        },
        {
          "name": "base_lang_pack_version",
          "type": "flags.2?int"
        }
      ],
      "type": "Config"
    },
    {
      "id": "-1910892683",
      "predicate": "nearestDc",
      "params": [
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "nearest_dc",
          "type": "int"
        }
      ],
      "type": "NearestDc"
    },
    {
      "id": "497489295",
      "predicate": "help.appUpdate",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        }
      ],
      "type": "help.AppUpdate"
    },
    {
      "id": "-1000708810",
      "predicate": "help.noAppUpdate",
      "params": [],
      "type": "help.AppUpdate"
    },
    {
      "id": "415997816",
      "predicate": "help.inviteText",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "help.InviteText"
    },
    {
      "id": "-1417756512",
      "predicate": "encryptedChatEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": "1006044124",
      "predicate": "encryptedChatWaiting",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": "-931638658",
      "predicate": "encryptedChatRequested",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": "-94974410",
      "predicate": "encryptedChat",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": "332848423",
      "predicate": "encryptedChatDiscarded",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    {
      "id": "-247351839",
      "predicate": "inputEncryptedChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedChat"
    },
    {
      "id": "-1038136962",
      "predicate": "encryptedFileEmpty",
      "params": [],
      "type": "EncryptedFile"
    },
    {
      "id": "1248893260",
      "predicate": "encryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "EncryptedFile"
    },
    {
      "id": "406307684",
      "predicate": "inputEncryptedFileEmpty",
      "params": [],
      "type": "InputEncryptedFile"
    },
    {
      "id": "1690108678",
      "predicate": "inputEncryptedFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": "1511503333",
      "predicate": "inputEncryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": "767652808",
      "predicate": "inputEncryptedFileBigUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    {
      "id": "-317144808",
      "predicate": "encryptedMessage",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "EncryptedMessage"
    },
    {
      "id": "594758406",
      "predicate": "encryptedMessageService",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "EncryptedMessage"
    },
    {
      "id": "-1058912715",
      "predicate": "messages.dhConfigNotModified",
      "params": [
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": "740433629",
      "predicate": "messages.dhConfig",
      "params": [
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    {
      "id": "1443858741",
      "predicate": "messages.sentEncryptedMessage",
      "params": [
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": "-1802240206",
      "predicate": "messages.sentEncryptedFile",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    {
      "id": "1928391342",
      "predicate": "inputDocumentEmpty",
      "params": [],
      "type": "InputDocument"
    },
    {
      "id": "448771445",
      "predicate": "inputDocument",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputDocument"
    },
    {
      "id": "922273905",
      "predicate": "documentEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Document"
    },
    {
      "id": "-1683841855",
      "predicate": "document",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "thumbs",
          "type": "flags.0?Vector"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "attributes",
          "type": "Vector"
        }
      ],
      "type": "Document"
    },
    {
      "id": "398898678",
      "predicate": "help.support",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "help.Support"
    },
    {
      "id": "-1613493288",
      "predicate": "notifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "NotifyPeer"
    },
    {
      "id": "-1261946036",
      "predicate": "notifyUsers",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": "-1073230141",
      "predicate": "notifyChats",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": "-703403793",
      "predicate": "notifyBroadcasts",
      "params": [],
      "type": "NotifyPeer"
    },
    {
      "id": "381645902",
      "predicate": "sendMessageTypingAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "-44119819",
      "predicate": "sendMessageCancelAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "-1584933265",
      "predicate": "sendMessageRecordVideoAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "-378127636",
      "predicate": "sendMessageUploadVideoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": "-718310409",
      "predicate": "sendMessageRecordAudioAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "-212740181",
      "predicate": "sendMessageUploadAudioAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": "-774682074",
      "predicate": "sendMessageUploadPhotoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": "-1441998364",
      "predicate": "sendMessageUploadDocumentAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": "393186209",
      "predicate": "sendMessageGeoLocationAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "1653390447",
      "predicate": "sendMessageChooseContactAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "-580219064",
      "predicate": "sendMessageGamePlayAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "-1997373508",
      "predicate": "sendMessageRecordRoundAction",
      "params": [],
      "type": "SendMessageAction"
    },
    {
      "id": "608050278",
      "predicate": "sendMessageUploadRoundAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    {
      "id": "-1290580579",
      "predicate": "contacts.found",
      "params": [
        {
          "name": "my_results",
          "type": "Vector"
        },
        {
          "name": "results",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "contacts.Found"
    },
    {
      "id": "1335282456",
      "predicate": "inputPrivacyKeyStatusTimestamp",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": "-1107622874",
      "predicate": "inputPrivacyKeyChatInvite",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": "-88417185",
      "predicate": "inputPrivacyKeyPhoneCall",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": "-610373422",
      "predicate": "inputPrivacyKeyPhoneP2P",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": "-1529000952",
      "predicate": "inputPrivacyKeyForwards",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": "1461304012",
      "predicate": "inputPrivacyKeyProfilePhoto",
      "params": [],
      "type": "InputPrivacyKey"
    },
    {
      "id": "-1137792208",
      "predicate": "privacyKeyStatusTimestamp",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": "1343122938",
      "predicate": "privacyKeyChatInvite",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": "1030105979",
      "predicate": "privacyKeyPhoneCall",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": "961092808",
      "predicate": "privacyKeyPhoneP2P",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": "1777096355",
      "predicate": "privacyKeyForwards",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": "-1777000467",
      "predicate": "privacyKeyProfilePhoto",
      "params": [],
      "type": "PrivacyKey"
    },
    {
      "id": "218751099",
      "predicate": "inputPrivacyValueAllowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": "407582158",
      "predicate": "inputPrivacyValueAllowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": "320652927",
      "predicate": "inputPrivacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": "195371015",
      "predicate": "inputPrivacyValueDisallowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": "-697604407",
      "predicate": "inputPrivacyValueDisallowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    {
      "id": "-1877932953",
      "predicate": "inputPrivacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "InputPrivacyRule"
    },
    {
      "id": "-123988",
      "predicate": "privacyValueAllowContacts",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": "1698855810",
      "predicate": "privacyValueAllowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": "1297858060",
      "predicate": "privacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": "-125240806",
      "predicate": "privacyValueDisallowContacts",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": "-1955338397",
      "predicate": "privacyValueDisallowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    {
      "id": "209668535",
      "predicate": "privacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "PrivacyRule"
    },
    {
      "id": "1430961007",
      "predicate": "account.privacyRules",
      "params": [
        {
          "name": "rules",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "account.PrivacyRules"
    },
    {
      "id": "-1194283041",
      "predicate": "accountDaysTTL",
      "params": [
        {
          "name": "days",
          "type": "int"
        }
      ],
      "type": "AccountDaysTTL"
    },
    {
      "id": "1815593308",
      "predicate": "documentAttributeImageSize",
      "params": [
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": "297109817",
      "predicate": "documentAttributeAnimated",
      "params": [],
      "type": "DocumentAttribute"
    },
    {
      "id": "1662637586",
      "predicate": "documentAttributeSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "mask",
          "type": "flags.1?true"
        },
        {
          "name": "alt",
          "type": "string"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": "250621158",
      "predicate": "documentAttributeVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "round_message",
          "type": "flags.0?true"
        },
        {
          "name": "supports_streaming",
          "type": "flags.1?true"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": "-1739392570",
      "predicate": "documentAttributeAudio",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "voice",
          "type": "flags.10?true"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "performer",
          "type": "flags.1?string"
        },
        {
          "name": "waveform",
          "type": "flags.2?bytes"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": "358154344",
      "predicate": "documentAttributeFilename",
      "params": [
        {
          "name": "file_name",
          "type": "string"
        }
      ],
      "type": "DocumentAttribute"
    },
    {
      "id": "-1744710921",
      "predicate": "documentAttributeHasStickers",
      "params": [],
      "type": "DocumentAttribute"
    },
    {
      "id": "-244016606",
      "predicate": "messages.stickersNotModified",
      "params": [],
      "type": "messages.Stickers"
    },
    {
      "id": "-463889475",
      "predicate": "messages.stickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "stickers",
          "type": "Vector"
        }
      ],
      "type": "messages.Stickers"
    },
    {
      "id": "313694676",
      "predicate": "stickerPack",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "documents",
          "type": "Vector"
        }
      ],
      "type": "StickerPack"
    },
    {
      "id": "-395967805",
      "predicate": "messages.allStickersNotModified",
      "params": [],
      "type": "messages.AllStickers"
    },
    {
      "id": "-302170017",
      "predicate": "messages.allStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector"
        }
      ],
      "type": "messages.AllStickers"
    },
    {
      "id": "-2066640507",
      "predicate": "messages.affectedMessages",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    {
      "id": "1599050311",
      "predicate": "contactLinkUnknown",
      "params": [],
      "type": "ContactLink"
    },
    {
      "id": "-17968211",
      "predicate": "contactLinkNone",
      "params": [],
      "type": "ContactLink"
    },
    {
      "id": "646922073",
      "predicate": "contactLinkHasPhone",
      "params": [],
      "type": "ContactLink"
    },
    {
      "id": "-721239344",
      "predicate": "contactLinkContact",
      "params": [],
      "type": "ContactLink"
    },
    {
      "id": "-350980120",
      "predicate": "webPageEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": "-981018084",
      "predicate": "webPagePending",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": "1594340540",
      "predicate": "webPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "display_url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "type",
          "type": "flags.0?string"
        },
        {
          "name": "site_name",
          "type": "flags.1?string"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "photo",
          "type": "flags.4?Photo"
        },
        {
          "name": "embed_url",
          "type": "flags.5?string"
        },
        {
          "name": "embed_type",
          "type": "flags.5?string"
        },
        {
          "name": "embed_width",
          "type": "flags.6?int"
        },
        {
          "name": "embed_height",
          "type": "flags.6?int"
        },
        {
          "name": "duration",
          "type": "flags.7?int"
        },
        {
          "name": "author",
          "type": "flags.8?string"
        },
        {
          "name": "document",
          "type": "flags.9?Document"
        },
        {
          "name": "cached_page",
          "type": "flags.10?Page"
        }
      ],
      "type": "WebPage"
    },
    {
      "id": "-2054908813",
      "predicate": "webPageNotModified",
      "params": [],
      "type": "WebPage"
    },
    {
      "id": "-1392388579",
      "predicate": "authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "current",
          "type": "flags.0?true"
        },
        {
          "name": "official_app",
          "type": "flags.1?true"
        },
        {
          "name": "password_pending",
          "type": "flags.2?true"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "app_name",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "Authorization"
    },
    {
      "id": "307276766",
      "predicate": "account.authorizations",
      "params": [
        {
          "name": "authorizations",
          "type": "Vector"
        }
      ],
      "type": "account.Authorizations"
    },
    {
      "id": "-1390001672",
      "predicate": "account.password",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_recovery",
          "type": "flags.0?true"
        },
        {
          "name": "has_secure_values",
          "type": "flags.1?true"
        },
        {
          "name": "has_password",
          "type": "flags.2?true"
        },
        {
          "name": "current_algo",
          "type": "flags.2?PasswordKdfAlgo"
        },
        {
          "name": "srp_B",
          "type": "flags.2?bytes"
        },
        {
          "name": "srp_id",
          "type": "flags.2?long"
        },
        {
          "name": "hint",
          "type": "flags.3?string"
        },
        {
          "name": "email_unconfirmed_pattern",
          "type": "flags.4?string"
        },
        {
          "name": "new_algo",
          "type": "PasswordKdfAlgo"
        },
        {
          "name": "new_secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_random",
          "type": "bytes"
        }
      ],
      "type": "account.Password"
    },
    {
      "id": "-1705233435",
      "predicate": "account.passwordSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "email",
          "type": "flags.0?string"
        },
        {
          "name": "secure_settings",
          "type": "flags.1?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordSettings"
    },
    {
      "id": "-1036572727",
      "predicate": "account.passwordInputSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "new_algo",
          "type": "flags.0?PasswordKdfAlgo"
        },
        {
          "name": "new_password_hash",
          "type": "flags.0?bytes"
        },
        {
          "name": "hint",
          "type": "flags.0?string"
        },
        {
          "name": "email",
          "type": "flags.1?string"
        },
        {
          "name": "new_secure_settings",
          "type": "flags.2?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordInputSettings"
    },
    {
      "id": "326715557",
      "predicate": "auth.passwordRecovery",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        }
      ],
      "type": "auth.PasswordRecovery"
    },
    {
      "id": "-1551583367",
      "predicate": "receivedNotifyMessage",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "flags",
          "type": "int"
        }
      ],
      "type": "ReceivedNotifyMessage"
    },
    {
      "id": "1776236393",
      "predicate": "chatInviteEmpty",
      "params": [],
      "type": "ExportedChatInvite"
    },
    {
      "id": "-64092740",
      "predicate": "chatInviteExported",
      "params": [
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "ExportedChatInvite"
    },
    {
      "id": "1516793212",
      "predicate": "chatInviteAlready",
      "params": [
        {
          "name": "chat",
          "type": "Chat"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": "-540871282",
      "predicate": "chatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "flags.0?true"
        },
        {
          "name": "broadcast",
          "type": "flags.1?true"
        },
        {
          "name": "public",
          "type": "flags.2?true"
        },
        {
          "name": "megagroup",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "flags.4?Vector"
        }
      ],
      "type": "ChatInvite"
    },
    {
      "id": "-4838507",
      "predicate": "inputStickerSetEmpty",
      "params": [],
      "type": "InputStickerSet"
    },
    {
      "id": "-1645763991",
      "predicate": "inputStickerSetID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": "-2044933984",
      "predicate": "inputStickerSetShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputStickerSet"
    },
    {
      "id": "-290164953",
      "predicate": "stickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "archived",
          "type": "flags.1?true"
        },
        {
          "name": "official",
          "type": "flags.2?true"
        },
        {
          "name": "masks",
          "type": "flags.3?true"
        },
        {
          "name": "installed_date",
          "type": "flags.0?int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "thumb",
          "type": "flags.4?PhotoSize"
        },
        {
          "name": "thumb_dc_id",
          "type": "flags.4?int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "StickerSet"
    },
    {
      "id": "-1240849242",
      "predicate": "messages.stickerSet",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "packs",
          "type": "Vector"
        },
        {
          "name": "documents",
          "type": "Vector"
        }
      ],
      "type": "messages.StickerSet"
    },
    {
      "id": "-1032140601",
      "predicate": "botCommand",
      "params": [
        {
          "name": "command",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "BotCommand"
    },
    {
      "id": "-1729618630",
      "predicate": "botInfo",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "commands",
          "type": "Vector"
        }
      ],
      "type": "BotInfo"
    },
    {
      "id": "-1560655744",
      "predicate": "keyboardButton",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "629866245",
      "predicate": "keyboardButtonUrl",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "1748655686",
      "predicate": "keyboardButtonCallback",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "-1318425559",
      "predicate": "keyboardButtonRequestPhone",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "-59151553",
      "predicate": "keyboardButtonRequestGeoLocation",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "90744648",
      "predicate": "keyboardButtonSwitchInline",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "same_peer",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "query",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "1358175439",
      "predicate": "keyboardButtonGame",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "-1344716869",
      "predicate": "keyboardButtonBuy",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    {
      "id": "2002815875",
      "predicate": "keyboardButtonRow",
      "params": [
        {
          "name": "buttons",
          "type": "Vector"
        }
      ],
      "type": "KeyboardButtonRow"
    },
    {
      "id": "-1606526075",
      "predicate": "replyKeyboardHide",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": "-200242528",
      "predicate": "replyKeyboardForceReply",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": "889353612",
      "predicate": "replyKeyboardMarkup",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "resize",
          "type": "flags.0?true"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        },
        {
          "name": "rows",
          "type": "Vector"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": "1218642516",
      "predicate": "replyInlineMarkup",
      "params": [
        {
          "name": "rows",
          "type": "Vector"
        }
      ],
      "type": "ReplyMarkup"
    },
    {
      "id": "-1148011883",
      "predicate": "messageEntityUnknown",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "-100378723",
      "predicate": "messageEntityMention",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "1868782349",
      "predicate": "messageEntityHashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "1827637959",
      "predicate": "messageEntityBotCommand",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "1859134776",
      "predicate": "messageEntityUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "1692693954",
      "predicate": "messageEntityEmail",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "-1117713463",
      "predicate": "messageEntityBold",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "-2106619040",
      "predicate": "messageEntityItalic",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "681706865",
      "predicate": "messageEntityCode",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "1938967520",
      "predicate": "messageEntityPre",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "1990644519",
      "predicate": "messageEntityTextUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "892193368",
      "predicate": "messageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "546203849",
      "predicate": "inputMessageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "-1687559349",
      "predicate": "messageEntityPhone",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "1280209983",
      "predicate": "messageEntityCashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    {
      "id": "-292807034",
      "predicate": "inputChannelEmpty",
      "params": [],
      "type": "InputChannel"
    },
    {
      "id": "-1343524562",
      "predicate": "inputChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputChannel"
    },
    {
      "id": "2131196633",
      "predicate": "contacts.resolvedPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    {
      "id": "182649427",
      "predicate": "messageRange",
      "params": [
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "MessageRange"
    },
    {
      "id": "1041346555",
      "predicate": "updates.channelDifferenceEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": "1788705589",
      "predicate": "updates.channelDifferenceTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "unread_mentions_count",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": "543450958",
      "predicate": "updates.channelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "new_messages",
          "type": "Vector"
        },
        {
          "name": "other_updates",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    {
      "id": "-1798033689",
      "predicate": "channelMessagesFilterEmpty",
      "params": [],
      "type": "ChannelMessagesFilter"
    },
    {
      "id": "-847783593",
      "predicate": "channelMessagesFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_new_messages",
          "type": "flags.1?true"
        },
        {
          "name": "ranges",
          "type": "Vector"
        }
      ],
      "type": "ChannelMessagesFilter"
    },
    {
      "id": "367766557",
      "predicate": "channelParticipant",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": "-1557620115",
      "predicate": "channelParticipantSelf",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": "-471670279",
      "predicate": "channelParticipantCreator",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": "1571450403",
      "predicate": "channelParticipantAdmin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_edit",
          "type": "flags.0?true"
        },
        {
          "name": "self",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "flags.1?int"
        },
        {
          "name": "promoted_by",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": "470789295",
      "predicate": "channelParticipantBanned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "left",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "kicked_by",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelParticipant"
    },
    {
      "id": "-566281095",
      "predicate": "channelParticipantsRecent",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": "-1268741783",
      "predicate": "channelParticipantsAdmins",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": "-1548400251",
      "predicate": "channelParticipantsKicked",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": "-1328445861",
      "predicate": "channelParticipantsBots",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": "338142689",
      "predicate": "channelParticipantsBanned",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": "106343499",
      "predicate": "channelParticipantsSearch",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": "-1150621555",
      "predicate": "channelParticipantsContacts",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    {
      "id": "-177282392",
      "predicate": "channels.channelParticipants",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": "-266911767",
      "predicate": "channels.channelParticipantsNotModified",
      "params": [],
      "type": "channels.ChannelParticipants"
    },
    {
      "id": "-791039645",
      "predicate": "channels.channelParticipant",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    {
      "id": "2013922064",
      "predicate": "help.termsOfService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "DataJSON"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector"
        },
        {
          "name": "min_age_confirm",
          "type": "flags.1?int"
        }
      ],
      "type": "help.TermsOfService"
    },
    {
      "id": "372165663",
      "predicate": "foundGif",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "thumb_url",
          "type": "string"
        },
        {
          "name": "content_url",
          "type": "string"
        },
        {
          "name": "content_type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "FoundGif"
    },
    {
      "id": "-1670052855",
      "predicate": "foundGifCached",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "document",
          "type": "Document"
        }
      ],
      "type": "FoundGif"
    },
    {
      "id": "1158290442",
      "predicate": "messages.foundGifs",
      "params": [
        {
          "name": "next_offset",
          "type": "int"
        },
        {
          "name": "results",
          "type": "Vector"
        }
      ],
      "type": "messages.FoundGifs"
    },
    {
      "id": "-402498398",
      "predicate": "messages.savedGifsNotModified",
      "params": [],
      "type": "messages.SavedGifs"
    },
    {
      "id": "772213157",
      "predicate": "messages.savedGifs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "gifs",
          "type": "Vector"
        }
      ],
      "type": "messages.SavedGifs"
    },
    {
      "id": "864077702",
      "predicate": "inputBotInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": "1036876423",
      "predicate": "inputBotInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": "-1045340827",
      "predicate": "inputBotInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": "1098628881",
      "predicate": "inputBotInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": "-1494368259",
      "predicate": "inputBotInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": "1262639204",
      "predicate": "inputBotInlineMessageGame",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    {
      "id": "-2000710887",
      "predicate": "inputBotInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?InputWebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?InputWebDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": "-1462213465",
      "predicate": "inputBotInlineResultPhoto",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "InputPhoto"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": "-459324",
      "predicate": "inputBotInlineResultDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": "1336154098",
      "predicate": "inputBotInlineResultGame",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    {
      "id": "1984755728",
      "predicate": "botInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": "-1937807902",
      "predicate": "botInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": "-1222451611",
      "predicate": "botInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": "-1970903652",
      "predicate": "botInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": "416402882",
      "predicate": "botInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    {
      "id": "295067450",
      "predicate": "botInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?WebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?WebDocument"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    {
      "id": "400266251",
      "predicate": "botInlineMediaResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    {
      "id": "-1803769784",
      "predicate": "messages.botResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "next_offset",
          "type": "flags.1?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.2?InlineBotSwitchPM"
        },
        {
          "name": "results",
          "type": "Vector"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.BotResults"
    },
    {
      "id": "1571494644",
      "predicate": "exportedMessageLink",
      "params": [
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "html",
          "type": "string"
        }
      ],
      "type": "ExportedMessageLink"
    },
    {
      "id": "-332168592",
      "predicate": "messageFwdHeader",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "from_id",
          "type": "flags.0?int"
        },
        {
          "name": "from_name",
          "type": "flags.5?string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "flags.1?int"
        },
        {
          "name": "channel_post",
          "type": "flags.2?int"
        },
        {
          "name": "post_author",
          "type": "flags.3?string"
        },
        {
          "name": "saved_from_peer",
          "type": "flags.4?Peer"
        },
        {
          "name": "saved_from_msg_id",
          "type": "flags.4?int"
        }
      ],
      "type": "MessageFwdHeader"
    },
    {
      "id": "1923290508",
      "predicate": "auth.codeTypeSms",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": "1948046307",
      "predicate": "auth.codeTypeCall",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": "577556219",
      "predicate": "auth.codeTypeFlashCall",
      "params": [],
      "type": "auth.CodeType"
    },
    {
      "id": "1035688326",
      "predicate": "auth.sentCodeTypeApp",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": "-1073693790",
      "predicate": "auth.sentCodeTypeSms",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": "1398007207",
      "predicate": "auth.sentCodeTypeCall",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": "-1425815847",
      "predicate": "auth.sentCodeTypeFlashCall",
      "params": [
        {
          "name": "pattern",
          "type": "string"
        }
      ],
      "type": "auth.SentCodeType"
    },
    {
      "id": "911761060",
      "predicate": "messages.botCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "has_url",
          "type": "flags.3?true"
        },
        {
          "name": "native_ui",
          "type": "flags.4?true"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    {
      "id": "649453030",
      "predicate": "messages.messageEditData",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "caption",
          "type": "flags.0?true"
        }
      ],
      "type": "messages.MessageEditData"
    },
    {
      "id": "-1995686519",
      "predicate": "inputBotInlineMessageID",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputBotInlineMessageID"
    },
    {
      "id": "1008755359",
      "predicate": "inlineBotSwitchPM",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "InlineBotSwitchPM"
    },
    {
      "id": "863093588",
      "predicate": "messages.peerDialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector"
        },
        {
          "name": "messages",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    {
      "id": "-305282981",
      "predicate": "topPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "rating",
          "type": "double"
        }
      ],
      "type": "TopPeer"
    },
    {
      "id": "-1419371685",
      "predicate": "topPeerCategoryBotsPM",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": "344356834",
      "predicate": "topPeerCategoryBotsInline",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": "104314861",
      "predicate": "topPeerCategoryCorrespondents",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": "-1122524854",
      "predicate": "topPeerCategoryGroups",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": "371037736",
      "predicate": "topPeerCategoryChannels",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": "511092620",
      "predicate": "topPeerCategoryPhoneCalls",
      "params": [],
      "type": "TopPeerCategory"
    },
    {
      "id": "-75283823",
      "predicate": "topPeerCategoryPeers",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "peers",
          "type": "Vector"
        }
      ],
      "type": "TopPeerCategoryPeers"
    },
    {
      "id": "-567906571",
      "predicate": "contacts.topPeersNotModified",
      "params": [],
      "type": "contacts.TopPeers"
    },
    {
      "id": "1891070632",
      "predicate": "contacts.topPeers",
      "params": [
        {
          "name": "categories",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "contacts.TopPeers"
    },
    {
      "id": "-1255369827",
      "predicate": "contacts.topPeersDisabled",
      "params": [],
      "type": "contacts.TopPeers"
    },
    {
      "id": "453805082",
      "predicate": "draftMessageEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "flags.0?int"
        }
      ],
      "type": "DraftMessage"
    },
    {
      "id": "-40996577",
      "predicate": "draftMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "DraftMessage"
    },
    {
      "id": "82699215",
      "predicate": "messages.featuredStickersNotModified",
      "params": [],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": "-123893531",
      "predicate": "messages.featuredStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector"
        },
        {
          "name": "unread",
          "type": "Vector"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    {
      "id": "186120336",
      "predicate": "messages.recentStickersNotModified",
      "params": [],
      "type": "messages.RecentStickers"
    },
    {
      "id": "586395571",
      "predicate": "messages.recentStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "packs",
          "type": "Vector"
        },
        {
          "name": "stickers",
          "type": "Vector"
        },
        {
          "name": "dates",
          "type": "Vector"
        }
      ],
      "type": "messages.RecentStickers"
    },
    {
      "id": "1338747336",
      "predicate": "messages.archivedStickers",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    {
      "id": "946083368",
      "predicate": "messages.stickerSetInstallResultSuccess",
      "params": [],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": "904138920",
      "predicate": "messages.stickerSetInstallResultArchive",
      "params": [
        {
          "name": "sets",
          "type": "Vector"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    {
      "id": "1678812626",
      "predicate": "stickerSetCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "cover",
          "type": "Document"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": "872932635",
      "predicate": "stickerSetMultiCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "covers",
          "type": "Vector"
        }
      ],
      "type": "StickerSetCovered"
    },
    {
      "id": "-1361650766",
      "predicate": "maskCoords",
      "params": [
        {
          "name": "n",
          "type": "int"
        },
        {
          "name": "x",
          "type": "double"
        },
        {
          "name": "y",
          "type": "double"
        },
        {
          "name": "zoom",
          "type": "double"
        }
      ],
      "type": "MaskCoords"
    },
    {
      "id": "1251549527",
      "predicate": "inputStickeredMediaPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputStickeredMedia"
    },
    {
      "id": "70813275",
      "predicate": "inputStickeredMediaDocument",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        }
      ],
      "type": "InputStickeredMedia"
    },
    {
      "id": "-1107729093",
      "predicate": "game",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        }
      ],
      "type": "Game"
    },
    {
      "id": "53231223",
      "predicate": "inputGameID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputGame"
    },
    {
      "id": "-1020139510",
      "predicate": "inputGameShortName",
      "params": [
        {
          "name": "bot_id",
          "type": "InputUser"
        },
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputGame"
    },
    {
      "id": "1493171408",
      "predicate": "highScore",
      "params": [
        {
          "name": "pos",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "HighScore"
    },
    {
      "id": "-1707344487",
      "predicate": "messages.highScores",
      "params": [
        {
          "name": "scores",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "messages.HighScores"
    },
    {
      "id": "-599948721",
      "predicate": "textEmpty",
      "params": [],
      "type": "RichText"
    },
    {
      "id": "1950782688",
      "predicate": "textPlain",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "1730456516",
      "predicate": "textBold",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "-653089380",
      "predicate": "textItalic",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "-1054465340",
      "predicate": "textUnderline",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "-1678197867",
      "predicate": "textStrike",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "1816074681",
      "predicate": "textFixed",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "1009288385",
      "predicate": "textUrl",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "-564523562",
      "predicate": "textEmail",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "2120376535",
      "predicate": "textConcat",
      "params": [
        {
          "name": "texts",
          "type": "Vector"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "-311786236",
      "predicate": "textSubscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "-939827711",
      "predicate": "textSuperscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "55281185",
      "predicate": "textMarked",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "483104362",
      "predicate": "textPhone",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "136105807",
      "predicate": "textImage",
      "params": [
        {
          "name": "document_id",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "894777186",
      "predicate": "textAnchor",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    {
      "id": "324435594",
      "predicate": "pageBlockUnsupported",
      "params": [],
      "type": "PageBlock"
    },
    {
      "id": "1890305021",
      "predicate": "pageBlockTitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1879401953",
      "predicate": "pageBlockSubtitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1162877472",
      "predicate": "pageBlockAuthorDate",
      "params": [
        {
          "name": "author",
          "type": "RichText"
        },
        {
          "name": "published_date",
          "type": "int"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1076861716",
      "predicate": "pageBlockHeader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-248793375",
      "predicate": "pageBlockSubheader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "1182402406",
      "predicate": "pageBlockParagraph",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1066346178",
      "predicate": "pageBlockPreformatted",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "1216809369",
      "predicate": "pageBlockFooter",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-618614392",
      "predicate": "pageBlockDivider",
      "params": [],
      "type": "PageBlock"
    },
    {
      "id": "-837994576",
      "predicate": "pageBlockAnchor",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-454524911",
      "predicate": "pageBlockList",
      "params": [
        {
          "name": "items",
          "type": "Vector"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "641563686",
      "predicate": "pageBlockBlockquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "1329878739",
      "predicate": "pageBlockPullquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "391759200",
      "predicate": "pageBlockPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        },
        {
          "name": "url",
          "type": "flags.0?string"
        },
        {
          "name": "webpage_id",
          "type": "flags.0?long"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "2089805750",
      "predicate": "pageBlockVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "autoplay",
          "type": "flags.0?true"
        },
        {
          "name": "loop",
          "type": "flags.1?true"
        },
        {
          "name": "video_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "972174080",
      "predicate": "pageBlockCover",
      "params": [
        {
          "name": "cover",
          "type": "PageBlock"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1468953147",
      "predicate": "pageBlockEmbed",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "full_width",
          "type": "flags.0?true"
        },
        {
          "name": "allow_scrolling",
          "type": "flags.3?true"
        },
        {
          "name": "url",
          "type": "flags.1?string"
        },
        {
          "name": "html",
          "type": "flags.2?string"
        },
        {
          "name": "poster_photo_id",
          "type": "flags.4?long"
        },
        {
          "name": "w",
          "type": "flags.5?int"
        },
        {
          "name": "h",
          "type": "flags.5?int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-229005301",
      "predicate": "pageBlockEmbedPost",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "author_photo_id",
          "type": "long"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "blocks",
          "type": "Vector"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "1705048653",
      "predicate": "pageBlockCollage",
      "params": [
        {
          "name": "items",
          "type": "Vector"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "52401552",
      "predicate": "pageBlockSlideshow",
      "params": [
        {
          "name": "items",
          "type": "Vector"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-283684427",
      "predicate": "pageBlockChannel",
      "params": [
        {
          "name": "channel",
          "type": "Chat"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-2143067670",
      "predicate": "pageBlockAudio",
      "params": [
        {
          "name": "audio_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "504660880",
      "predicate": "pageBlockKicker",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1085412734",
      "predicate": "pageBlockTable",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bordered",
          "type": "flags.0?true"
        },
        {
          "name": "striped",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "rows",
          "type": "Vector"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1702174239",
      "predicate": "pageBlockOrderedList",
      "params": [
        {
          "name": "items",
          "type": "Vector"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "1987480557",
      "predicate": "pageBlockDetails",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "open",
          "type": "flags.0?true"
        },
        {
          "name": "blocks",
          "type": "Vector"
        },
        {
          "name": "title",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "370236054",
      "predicate": "pageBlockRelatedArticles",
      "params": [
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "articles",
          "type": "Vector"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-1538310410",
      "predicate": "pageBlockMap",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    {
      "id": "-2048646399",
      "predicate": "phoneCallDiscardReasonMissed",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": "-527056480",
      "predicate": "phoneCallDiscardReasonDisconnect",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": "1471006352",
      "predicate": "phoneCallDiscardReasonHangup",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": "-84416311",
      "predicate": "phoneCallDiscardReasonBusy",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    {
      "id": "2104790276",
      "predicate": "dataJSON",
      "params": [
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "DataJSON"
    },
    {
      "id": "-886477832",
      "predicate": "labeledPrice",
      "params": [
        {
          "name": "label",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "LabeledPrice"
    },
    {
      "id": "-1022713000",
      "predicate": "invoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "test",
          "type": "flags.0?true"
        },
        {
          "name": "name_requested",
          "type": "flags.1?true"
        },
        {
          "name": "phone_requested",
          "type": "flags.2?true"
        },
        {
          "name": "email_requested",
          "type": "flags.3?true"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.4?true"
        },
        {
          "name": "flexible",
          "type": "flags.5?true"
        },
        {
          "name": "phone_to_provider",
          "type": "flags.6?true"
        },
        {
          "name": "email_to_provider",
          "type": "flags.7?true"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector"
        }
      ],
      "type": "Invoice"
    },
    {
      "id": "-368917890",
      "predicate": "paymentCharge",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "provider_charge_id",
          "type": "string"
        }
      ],
      "type": "PaymentCharge"
    },
    {
      "id": "512535275",
      "predicate": "postAddress",
      "params": [
        {
          "name": "street_line1",
          "type": "string"
        },
        {
          "name": "street_line2",
          "type": "string"
        },
        {
          "name": "city",
          "type": "string"
        },
        {
          "name": "state",
          "type": "string"
        },
        {
          "name": "country_iso2",
          "type": "string"
        },
        {
          "name": "post_code",
          "type": "string"
        }
      ],
      "type": "PostAddress"
    },
    {
      "id": "-1868808300",
      "predicate": "paymentRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name",
          "type": "flags.0?string"
        },
        {
          "name": "phone",
          "type": "flags.1?string"
        },
        {
          "name": "email",
          "type": "flags.2?string"
        },
        {
          "name": "shipping_address",
          "type": "flags.3?PostAddress"
        }
      ],
      "type": "PaymentRequestedInfo"
    },
    {
      "id": "-842892769",
      "predicate": "paymentSavedCredentialsCard",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "PaymentSavedCredentials"
    },
    {
      "id": "475467473",
      "predicate": "webDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector"
        }
      ],
      "type": "WebDocument"
    },
    {
      "id": "-104284986",
      "predicate": "webDocumentNoProxy",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector"
        }
      ],
      "type": "WebDocument"
    },
    {
      "id": "-1678949555",
      "predicate": "inputWebDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector"
        }
      ],
      "type": "InputWebDocument"
    },
    {
      "id": "-1036396922",
      "predicate": "inputWebFileLocation",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWebFileLocation"
    },
    {
      "id": "-1625153079",
      "predicate": "inputWebFileGeoPointLocation",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "scale",
          "type": "int"
        }
      ],
      "type": "InputWebFileLocation"
    },
    {
      "id": "568808380",
      "predicate": "upload.webFile",
      "params": [
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "file_type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.WebFile"
    },
    {
      "id": "1062645411",
      "predicate": "payments.paymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_save_credentials",
          "type": "flags.2?true"
        },
        {
          "name": "password_missing",
          "type": "flags.3?true"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "provider_id",
          "type": "int"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "native_provider",
          "type": "flags.4?string"
        },
        {
          "name": "native_params",
          "type": "flags.4?DataJSON"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "saved_credentials",
          "type": "flags.1?PaymentSavedCredentials"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "payments.PaymentForm"
    },
    {
      "id": "-784000893",
      "predicate": "payments.validatedRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    {
      "id": "1314881805",
      "predicate": "payments.paymentResult",
      "params": [
        {
          "name": "updates",
          "type": "Updates"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": "1800845601",
      "predicate": "payments.paymentVerficationNeeded",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.PaymentResult"
    },
    {
      "id": "1342771681",
      "predicate": "payments.paymentReceipt",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "provider_id",
          "type": "int"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping",
          "type": "flags.1?ShippingOption"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "credentials_title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    {
      "id": "-74456004",
      "predicate": "payments.savedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_saved_credentials",
          "type": "flags.1?true"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        }
      ],
      "type": "payments.SavedInfo"
    },
    {
      "id": "-1056001329",
      "predicate": "inputPaymentCredentialsSaved",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "tmp_password",
          "type": "bytes"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": "873977640",
      "predicate": "inputPaymentCredentials",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": "178373535",
      "predicate": "inputPaymentCredentialsApplePay",
      "params": [
        {
          "name": "payment_data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": "-905587442",
      "predicate": "inputPaymentCredentialsAndroidPay",
      "params": [
        {
          "name": "payment_token",
          "type": "DataJSON"
        },
        {
          "name": "google_transaction_id",
          "type": "string"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    {
      "id": "-614138572",
      "predicate": "account.tmpPassword",
      "params": [
        {
          "name": "tmp_password",
          "type": "bytes"
        },
        {
          "name": "valid_until",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    {
      "id": "-1239335713",
      "predicate": "shippingOption",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector"
        }
      ],
      "type": "ShippingOption"
    },
    {
      "id": "-6249322",
      "predicate": "inputStickerSetItem",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "emoji",
          "type": "string"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        }
      ],
      "type": "InputStickerSetItem"
    },
    {
      "id": "506920429",
      "predicate": "inputPhoneCall",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPhoneCall"
    },
    {
      "id": "1399245077",
      "predicate": "phoneCallEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": "462375633",
      "predicate": "phoneCallWaiting",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "receive_date",
          "type": "flags.0?int"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": "-2014659757",
      "predicate": "phoneCallRequested",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": "-1719909046",
      "predicate": "phoneCallAccepted",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": "-2025673089",
      "predicate": "phoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "p2p_allowed",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "connections",
          "type": "Vector"
        },
        {
          "name": "start_date",
          "type": "int"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": "1355435489",
      "predicate": "phoneCallDiscarded",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "need_rating",
          "type": "flags.2?true"
        },
        {
          "name": "need_debug",
          "type": "flags.3?true"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        }
      ],
      "type": "PhoneCall"
    },
    {
      "id": "-1655957568",
      "predicate": "phoneConnection",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "ipv6",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "peer_tag",
          "type": "bytes"
        }
      ],
      "type": "PhoneConnection"
    },
    {
      "id": "-1564789301",
      "predicate": "phoneCallProtocol",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "udp_p2p",
          "type": "flags.0?true"
        },
        {
          "name": "udp_reflector",
          "type": "flags.1?true"
        },
        {
          "name": "min_layer",
          "type": "int"
        },
        {
          "name": "max_layer",
          "type": "int"
        }
      ],
      "type": "PhoneCallProtocol"
    },
    {
      "id": "-326966976",
      "predicate": "phone.phoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "phone.PhoneCall"
    },
    {
      "id": "-290921362",
      "predicate": "upload.cdnFileReuploadNeeded",
      "params": [
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": "-1449145777",
      "predicate": "upload.cdnFile",
      "params": [
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    {
      "id": "-914167110",
      "predicate": "cdnPublicKey",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "CdnPublicKey"
    },
    {
      "id": "1462101002",
      "predicate": "cdnConfig",
      "params": [
        {
          "name": "public_keys",
          "type": "Vector"
        }
      ],
      "type": "CdnConfig"
    },
    {
      "id": "-892239370",
      "predicate": "langPackString",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": "1816636575",
      "predicate": "langPackStringPluralized",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "zero_value",
          "type": "flags.0?string"
        },
        {
          "name": "one_value",
          "type": "flags.1?string"
        },
        {
          "name": "two_value",
          "type": "flags.2?string"
        },
        {
          "name": "few_value",
          "type": "flags.3?string"
        },
        {
          "name": "many_value",
          "type": "flags.4?string"
        },
        {
          "name": "other_value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": "695856818",
      "predicate": "langPackStringDeleted",
      "params": [
        {
          "name": "key",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    {
      "id": "-209337866",
      "predicate": "langPackDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "strings",
          "type": "Vector"
        }
      ],
      "type": "LangPackDifference"
    },
    {
      "id": "-288727837",
      "predicate": "langPackLanguage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "official",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.2?true"
        },
        {
          "name": "beta",
          "type": "flags.3?true"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "native_name",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "base_lang_code",
          "type": "flags.1?string"
        },
        {
          "name": "plural_code",
          "type": "string"
        },
        {
          "name": "strings_count",
          "type": "int"
        },
        {
          "name": "translated_count",
          "type": "int"
        },
        {
          "name": "translations_url",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    },
    {
      "id": "-421545947",
      "predicate": "channelAdminLogEventActionChangeTitle",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "1427671598",
      "predicate": "channelAdminLogEventActionChangeAbout",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "1783299128",
      "predicate": "channelAdminLogEventActionChangeUsername",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "1129042607",
      "predicate": "channelAdminLogEventActionChangePhoto",
      "params": [
        {
          "name": "prev_photo",
          "type": "Photo"
        },
        {
          "name": "new_photo",
          "type": "Photo"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "460916654",
      "predicate": "channelAdminLogEventActionToggleInvites",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "648939889",
      "predicate": "channelAdminLogEventActionToggleSignatures",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "-370660328",
      "predicate": "channelAdminLogEventActionUpdatePinned",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "1889215493",
      "predicate": "channelAdminLogEventActionEditMessage",
      "params": [
        {
          "name": "prev_message",
          "type": "Message"
        },
        {
          "name": "new_message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "1121994683",
      "predicate": "channelAdminLogEventActionDeleteMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "405815507",
      "predicate": "channelAdminLogEventActionParticipantJoin",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "-124291086",
      "predicate": "channelAdminLogEventActionParticipantLeave",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "-484690728",
      "predicate": "channelAdminLogEventActionParticipantInvite",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "-422036098",
      "predicate": "channelAdminLogEventActionParticipantToggleBan",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "-714643696",
      "predicate": "channelAdminLogEventActionParticipantToggleAdmin",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "-1312568665",
      "predicate": "channelAdminLogEventActionChangeStickerSet",
      "params": [
        {
          "name": "prev_stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "new_stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "1599903217",
      "predicate": "channelAdminLogEventActionTogglePreHistoryHidden",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "771095562",
      "predicate": "channelAdminLogEventActionDefaultBannedRights",
      "params": [
        {
          "name": "prev_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "new_banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "-1895328189",
      "predicate": "channelAdminLogEventActionStopPoll",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    {
      "id": "995769920",
      "predicate": "channelAdminLogEvent",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "ChannelAdminLogEventAction"
        }
      ],
      "type": "ChannelAdminLogEvent"
    },
    {
      "id": "-309659827",
      "predicate": "channels.adminLogResults",
      "params": [
        {
          "name": "events",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    {
      "id": "-368018716",
      "predicate": "channelAdminLogEventsFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "join",
          "type": "flags.0?true"
        },
        {
          "name": "leave",
          "type": "flags.1?true"
        },
        {
          "name": "invite",
          "type": "flags.2?true"
        },
        {
          "name": "ban",
          "type": "flags.3?true"
        },
        {
          "name": "unban",
          "type": "flags.4?true"
        },
        {
          "name": "kick",
          "type": "flags.5?true"
        },
        {
          "name": "unkick",
          "type": "flags.6?true"
        },
        {
          "name": "promote",
          "type": "flags.7?true"
        },
        {
          "name": "demote",
          "type": "flags.8?true"
        },
        {
          "name": "info",
          "type": "flags.9?true"
        },
        {
          "name": "settings",
          "type": "flags.10?true"
        },
        {
          "name": "pinned",
          "type": "flags.11?true"
        },
        {
          "name": "edit",
          "type": "flags.12?true"
        },
        {
          "name": "delete",
          "type": "flags.13?true"
        }
      ],
      "type": "ChannelAdminLogEventsFilter"
    },
    {
      "id": "1558266229",
      "predicate": "popularContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "importers",
          "type": "int"
        }
      ],
      "type": "PopularContact"
    },
    {
      "id": "-1634752813",
      "predicate": "messages.favedStickersNotModified",
      "params": [],
      "type": "messages.FavedStickers"
    },
    {
      "id": "-209768682",
      "predicate": "messages.favedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "packs",
          "type": "Vector"
        },
        {
          "name": "stickers",
          "type": "Vector"
        }
      ],
      "type": "messages.FavedStickers"
    },
    {
      "id": "1189204285",
      "predicate": "recentMeUrlUnknown",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": "-1917045962",
      "predicate": "recentMeUrlUser",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": "-1608834311",
      "predicate": "recentMeUrlChat",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": "-347535331",
      "predicate": "recentMeUrlChatInvite",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_invite",
          "type": "ChatInvite"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": "-1140172836",
      "predicate": "recentMeUrlStickerSet",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "set",
          "type": "StickerSetCovered"
        }
      ],
      "type": "RecentMeUrl"
    },
    {
      "id": "235081943",
      "predicate": "help.recentMeUrls",
      "params": [
        {
          "name": "urls",
          "type": "Vector"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    {
      "id": "482797855",
      "predicate": "inputSingleMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.0?Vector"
        }
      ],
      "type": "InputSingleMedia"
    },
    {
      "id": "-892779534",
      "predicate": "webAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "domain",
          "type": "string"
        },
        {
          "name": "browser",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "WebAuthorization"
    },
    {
      "id": "-313079300",
      "predicate": "account.webAuthorizations",
      "params": [
        {
          "name": "authorizations",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "account.WebAuthorizations"
    },
    {
      "id": "-1502174430",
      "predicate": "inputMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": "-1160215659",
      "predicate": "inputMessageReplyTo",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    {
      "id": "-2037963464",
      "predicate": "inputMessagePinned",
      "params": [],
      "type": "InputMessage"
    },
    {
      "id": "-55902537",
      "predicate": "inputDialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputDialogPeer"
    },
    {
      "id": "-445792507",
      "predicate": "dialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "DialogPeer"
    },
    {
      "id": "223655517",
      "predicate": "messages.foundStickerSetsNotModified",
      "params": [],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": "1359533640",
      "predicate": "messages.foundStickerSets",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    {
      "id": "1648543603",
      "predicate": "fileHash",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "FileHash"
    },
    {
      "id": "1968737087",
      "predicate": "inputClientProxy",
      "params": [
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "InputClientProxy"
    },
    {
      "id": "-526508104",
      "predicate": "help.proxyDataEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.ProxyData"
    },
    {
      "id": "737668643",
      "predicate": "help.proxyDataPromo",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        }
      ],
      "type": "help.ProxyData"
    },
    {
      "id": "-483352705",
      "predicate": "help.termsOfServiceUpdateEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": "686618977",
      "predicate": "help.termsOfServiceUpdate",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "terms_of_service",
          "type": "help.TermsOfService"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    {
      "id": "859091184",
      "predicate": "inputSecureFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "InputSecureFile"
    },
    {
      "id": "1399317950",
      "predicate": "inputSecureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputSecureFile"
    },
    {
      "id": "1679398724",
      "predicate": "secureFileEmpty",
      "params": [],
      "type": "SecureFile"
    },
    {
      "id": "-534283678",
      "predicate": "secureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureFile"
    },
    {
      "id": "-1964327229",
      "predicate": "secureData",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureData"
    },
    {
      "id": "2103482845",
      "predicate": "securePlainPhone",
      "params": [
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    {
      "id": "569137759",
      "predicate": "securePlainEmail",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    {
      "id": "-1658158621",
      "predicate": "secureValueTypePersonalDetails",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "1034709504",
      "predicate": "secureValueTypePassport",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "115615172",
      "predicate": "secureValueTypeDriverLicense",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-1596951477",
      "predicate": "secureValueTypeIdentityCard",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-1717268701",
      "predicate": "secureValueTypeInternalPassport",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-874308058",
      "predicate": "secureValueTypeAddress",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-63531698",
      "predicate": "secureValueTypeUtilityBill",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-1995211763",
      "predicate": "secureValueTypeBankStatement",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-1954007928",
      "predicate": "secureValueTypeRentalAgreement",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-1713143702",
      "predicate": "secureValueTypePassportRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-368907213",
      "predicate": "secureValueTypeTemporaryRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-1289704741",
      "predicate": "secureValueTypePhone",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "-1908627474",
      "predicate": "secureValueTypeEmail",
      "params": [],
      "type": "SecureValueType"
    },
    {
      "id": "411017418",
      "predicate": "secureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?SecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?SecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?SecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector"
        },
        {
          "name": "files",
          "type": "flags.4?Vector"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValue"
    },
    {
      "id": "-618540889",
      "predicate": "inputSecureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?InputSecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?InputSecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?InputSecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector"
        },
        {
          "name": "files",
          "type": "flags.4?Vector"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        }
      ],
      "type": "InputSecureValue"
    },
    {
      "id": "-316748368",
      "predicate": "secureValueHash",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValueHash"
    },
    {
      "id": "-391902247",
      "predicate": "secureValueErrorData",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "field",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "12467706",
      "predicate": "secureValueErrorFrontSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "-2037765467",
      "predicate": "secureValueErrorReverseSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "-449327402",
      "predicate": "secureValueErrorSelfie",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "2054162547",
      "predicate": "secureValueErrorFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "1717706985",
      "predicate": "secureValueErrorFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "-2036501105",
      "predicate": "secureValueError",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "-1592506512",
      "predicate": "secureValueErrorTranslationFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "878931416",
      "predicate": "secureValueErrorTranslationFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    {
      "id": "871426631",
      "predicate": "secureCredentialsEncrypted",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureCredentialsEncrypted"
    },
    {
      "id": "-1389486888",
      "predicate": "account.authorizationForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "required_types",
          "type": "Vector"
        },
        {
          "name": "values",
          "type": "Vector"
        },
        {
          "name": "errors",
          "type": "Vector"
        },
        {
          "name": "users",
          "type": "Vector"
        },
        {
          "name": "privacy_policy_url",
          "type": "flags.0?string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    {
      "id": "-2128640689",
      "predicate": "account.sentEmailCode",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "account.SentEmailCode"
    },
    {
      "id": "1722786150",
      "predicate": "help.deepLinkInfoEmpty",
      "params": [],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": "1783556146",
      "predicate": "help.deepLinkInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "update_app",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    {
      "id": "289586518",
      "predicate": "savedPhoneContact",
      "params": [
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "SavedContact"
    },
    {
      "id": "1304052993",
      "predicate": "account.takeout",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "account.Takeout"
    },
    {
      "id": "-732254058",
      "predicate": "passwordKdfAlgoUnknown",
      "params": [],
      "type": "PasswordKdfAlgo"
    },
    {
      "id": "982592842",
      "predicate": "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
      "params": [
        {
          "name": "salt1",
          "type": "bytes"
        },
        {
          "name": "salt2",
          "type": "bytes"
        },
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        }
      ],
      "type": "PasswordKdfAlgo"
    },
    {
      "id": "4883767",
      "predicate": "securePasswordKdfAlgoUnknown",
      "params": [],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": "-1141711456",
      "predicate": "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": "-2042159726",
      "predicate": "securePasswordKdfAlgoSHA512",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    {
      "id": "354925740",
      "predicate": "secureSecretSettings",
      "params": [
        {
          "name": "secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_secret",
          "type": "bytes"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureSecretSettings"
    },
    {
      "id": "-1736378792",
      "predicate": "inputCheckPasswordEmpty",
      "params": [],
      "type": "InputCheckPasswordSRP"
    },
    {
      "id": "-763367294",
      "predicate": "inputCheckPasswordSRP",
      "params": [
        {
          "name": "srp_id",
          "type": "long"
        },
        {
          "name": "A",
          "type": "bytes"
        },
        {
          "name": "M1",
          "type": "bytes"
        }
      ],
      "type": "InputCheckPasswordSRP"
    },
    {
      "id": "-2103600678",
      "predicate": "secureRequiredType",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "native_names",
          "type": "flags.0?true"
        },
        {
          "name": "selfie_required",
          "type": "flags.1?true"
        },
        {
          "name": "translation_required",
          "type": "flags.2?true"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        }
      ],
      "type": "SecureRequiredType"
    },
    {
      "id": "41187252",
      "predicate": "secureRequiredTypeOneOf",
      "params": [
        {
          "name": "types",
          "type": "Vector"
        }
      ],
      "type": "SecureRequiredType"
    },
    {
      "id": "-1078332329",
      "predicate": "help.passportConfigNotModified",
      "params": [],
      "type": "help.PassportConfig"
    },
    {
      "id": "-1600596305",
      "predicate": "help.passportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "countries_langs",
          "type": "DataJSON"
        }
      ],
      "type": "help.PassportConfig"
    },
    {
      "id": "488313413",
      "predicate": "inputAppEvent",
      "params": [
        {
          "name": "time",
          "type": "double"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "peer",
          "type": "long"
        },
        {
          "name": "data",
          "type": "JSONValue"
        }
      ],
      "type": "InputAppEvent"
    },
    {
      "id": "-1059185703",
      "predicate": "jsonObjectValue",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "JSONValue"
        }
      ],
      "type": "JSONObjectValue"
    },
    {
      "id": "1064139624",
      "predicate": "jsonNull",
      "params": [],
      "type": "JSONValue"
    },
    {
      "id": "-952869270",
      "predicate": "jsonBool",
      "params": [
        {
          "name": "value",
          "type": "Bool"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": "736157604",
      "predicate": "jsonNumber",
      "params": [
        {
          "name": "value",
          "type": "double"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": "-1222740358",
      "predicate": "jsonString",
      "params": [
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": "-146520221",
      "predicate": "jsonArray",
      "params": [
        {
          "name": "value",
          "type": "Vector"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": "-1715350371",
      "predicate": "jsonObject",
      "params": [
        {
          "name": "value",
          "type": "Vector"
        }
      ],
      "type": "JSONValue"
    },
    {
      "id": "878078826",
      "predicate": "pageTableCell",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "header",
          "type": "flags.0?true"
        },
        {
          "name": "align_center",
          "type": "flags.3?true"
        },
        {
          "name": "align_right",
          "type": "flags.4?true"
        },
        {
          "name": "valign_middle",
          "type": "flags.5?true"
        },
        {
          "name": "valign_bottom",
          "type": "flags.6?true"
        },
        {
          "name": "text",
          "type": "flags.7?RichText"
        },
        {
          "name": "colspan",
          "type": "flags.1?int"
        },
        {
          "name": "rowspan",
          "type": "flags.2?int"
        }
      ],
      "type": "PageTableCell"
    },
    {
      "id": "-524237339",
      "predicate": "pageTableRow",
      "params": [
        {
          "name": "cells",
          "type": "Vector"
        }
      ],
      "type": "PageTableRow"
    },
    {
      "id": "1869903447",
      "predicate": "pageCaption",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "credit",
          "type": "RichText"
        }
      ],
      "type": "PageCaption"
    },
    {
      "id": "-1188055347",
      "predicate": "pageListItemText",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListItem"
    },
    {
      "id": "635466748",
      "predicate": "pageListItemBlocks",
      "params": [
        {
          "name": "blocks",
          "type": "Vector"
        }
      ],
      "type": "PageListItem"
    },
    {
      "id": "1577484359",
      "predicate": "pageListOrderedItemText",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListOrderedItem"
    },
    {
      "id": "-1730311882",
      "predicate": "pageListOrderedItemBlocks",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector"
        }
      ],
      "type": "PageListOrderedItem"
    },
    {
      "id": "-1282352120",
      "predicate": "pageRelatedArticle",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "description",
          "type": "flags.1?string"
        },
        {
          "name": "photo_id",
          "type": "flags.2?long"
        },
        {
          "name": "author",
          "type": "flags.3?string"
        },
        {
          "name": "published_date",
          "type": "flags.4?int"
        }
      ],
      "type": "PageRelatedArticle"
    },
    {
      "id": "-1366746132",
      "predicate": "page",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "part",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.1?true"
        },
        {
          "name": "v2",
          "type": "flags.2?true"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector"
        },
        {
          "name": "photos",
          "type": "Vector"
        },
        {
          "name": "documents",
          "type": "Vector"
        }
      ],
      "type": "Page"
    },
    {
      "id": "-1945767479",
      "predicate": "help.supportName",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "help.SupportName"
    },
    {
      "id": "-206688531",
      "predicate": "help.userInfoEmpty",
      "params": [],
      "type": "help.UserInfo"
    },
    {
      "id": "32192344",
      "predicate": "help.userInfo",
      "params": [
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "help.UserInfo"
    },
    {
      "id": "1823064809",
      "predicate": "pollAnswer",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "PollAnswer"
    },
    {
      "id": "-716006138",
      "predicate": "poll",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "closed",
          "type": "flags.0?true"
        },
        {
          "name": "question",
          "type": "string"
        },
        {
          "name": "answers",
          "type": "Vector"
        }
      ],
      "type": "Poll"
    },
    {
      "id": "997055186",
      "predicate": "pollAnswerVoters",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chosen",
          "type": "flags.0?true"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "voters",
          "type": "int"
        }
      ],
      "type": "PollAnswerVoters"
    },
    {
      "id": "1465219162",
      "predicate": "pollResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "min",
          "type": "flags.0?true"
        },
        {
          "name": "results",
          "type": "flags.1?Vector"
        },
        {
          "name": "total_voters",
          "type": "flags.2?int"
        }
      ],
      "type": "PollResults"
    },
    {
      "id": "-264117680",
      "predicate": "chatOnlines",
      "params": [
        {
          "name": "onlines",
          "type": "int"
        }
      ],
      "type": "ChatOnlines"
    },
    {
      "id": "1202287072",
      "predicate": "statsURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "StatsURL"
    },
    {
      "id": "1605510357",
      "predicate": "chatAdminRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "change_info",
          "type": "flags.0?true"
        },
        {
          "name": "post_messages",
          "type": "flags.1?true"
        },
        {
          "name": "edit_messages",
          "type": "flags.2?true"
        },
        {
          "name": "delete_messages",
          "type": "flags.3?true"
        },
        {
          "name": "ban_users",
          "type": "flags.4?true"
        },
        {
          "name": "invite_users",
          "type": "flags.5?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.7?true"
        },
        {
          "name": "add_admins",
          "type": "flags.9?true"
        }
      ],
      "type": "ChatAdminRights"
    },
    {
      "id": "-1626209256",
      "predicate": "chatBannedRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "view_messages",
          "type": "flags.0?true"
        },
        {
          "name": "send_messages",
          "type": "flags.1?true"
        },
        {
          "name": "send_media",
          "type": "flags.2?true"
        },
        {
          "name": "send_stickers",
          "type": "flags.3?true"
        },
        {
          "name": "send_gifs",
          "type": "flags.4?true"
        },
        {
          "name": "send_games",
          "type": "flags.5?true"
        },
        {
          "name": "send_inline",
          "type": "flags.6?true"
        },
        {
          "name": "embed_links",
          "type": "flags.7?true"
        },
        {
          "name": "send_polls",
          "type": "flags.8?true"
        },
        {
          "name": "change_info",
          "type": "flags.10?true"
        },
        {
          "name": "invite_users",
          "type": "flags.15?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.17?true"
        },
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "ChatBannedRights"
    },
    {
      "id": "-433014407",
      "predicate": "inputWallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": "1913199744",
      "predicate": "inputWallPaperSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputWallPaper"
    },
    {
      "id": "471437699",
      "predicate": "account.wallPapersNotModified",
      "params": [],
      "type": "account.WallPapers"
    },
    {
      "id": "1881892265",
      "predicate": "account.wallPapers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "wallpapers",
          "type": "Vector"
        }
      ],
      "type": "account.WallPapers"
    },
    {
      "id": "808409587",
      "predicate": "codeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "allow_flashcall",
          "type": "flags.0?true"
        },
        {
          "name": "current_number",
          "type": "flags.1?true"
        },
        {
          "name": "app_hash_persistent",
          "type": "flags.2?true"
        },
        {
          "name": "app_hash",
          "type": "flags.3?string"
        }
      ],
      "type": "CodeSettings"
    },
    {
      "id": "-1590738760",
      "predicate": "wallPaperSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blur",
          "type": "flags.1?true"
        },
        {
          "name": "motion",
          "type": "flags.2?true"
        },
        {
          "name": "background_color",
          "type": "flags.0?int"
        },
        {
          "name": "intensity",
          "type": "flags.3?int"
        }
      ],
      "type": "WallPaperSettings"
    },
    {
      "id": "-767099577",
      "predicate": "autoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "disabled",
          "type": "flags.0?true"
        },
        {
          "name": "video_preload_large",
          "type": "flags.1?true"
        },
        {
          "name": "audio_preload_next",
          "type": "flags.2?true"
        },
        {
          "name": "phonecalls_less_data",
          "type": "flags.3?true"
        },
        {
          "name": "photo_size_max",
          "type": "int"
        },
        {
          "name": "video_size_max",
          "type": "int"
        },
        {
          "name": "file_size_max",
          "type": "int"
        }
      ],
      "type": "AutoDownloadSettings"
    },
    {
      "id": "1674235686",
      "predicate": "account.autoDownloadSettings",
      "params": [
        {
          "name": "low",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "medium",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "high",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "account.AutoDownloadSettings"
    },
    {
      "id": "-709641735",
      "predicate": "emojiKeyword",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector"
        }
      ],
      "type": "EmojiKeyword"
    },
    {
      "id": "594408994",
      "predicate": "emojiKeywordDeleted",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector"
        }
      ],
      "type": "EmojiKeyword"
    },
    {
      "id": "1556570557",
      "predicate": "emojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "keywords",
          "type": "Vector"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    {
      "id": "-1519029347",
      "predicate": "emojiURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    {
      "id": "-1275374751",
      "predicate": "emojiLanguage",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiLanguage"
    },
    {
      "id": "-1132476723",
      "predicate": "fileLocationToBeDeprecated",
      "params": [
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        }
      ],
      "type": "FileLocation"
    }
  ]
}