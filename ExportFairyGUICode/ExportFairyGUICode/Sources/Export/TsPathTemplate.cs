﻿using System;
using System.Collections.Generic;
using System.Text;

public class TsPathTemplate
{

    public static string ComponentStruct
    {
        get
        {
            return Setting.Options.templateDir + "/TS/ComponentStruct.txt";
        }
    }

    public static string ComponentExtend
    {
        get
        {
            return Setting.Options.templateDir + "/TS/ComponentExtend.txt";
        }
    }
}